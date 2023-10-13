import { ROLES } from '@db/constants';
import { Area, User, UserArea, UsersCommunities } from '@db/entities';
import { HASH_SALT } from '@environments';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { In, Repository } from 'typeorm';
import { Resp } from '../utils/response.manager';
import {
  CreateUserDTO,
  CreateUserWithGoogleDTO,
  UpdateUserDTO,
  UserToProjectDTO,
} from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UsersCommunities)
    private readonly userProjectRepository: Repository<UsersCommunities>,
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
    @InjectRepository(UserArea)
    private readonly userAreaRepository: Repository<UserArea>
  ) {}

  public async registerUser(registerUser: CreateUserDTO) {
    const { email, username, areasOfInterest } = registerUser;

    const findUserbyEmail = await this.userRepository.findOneBy({ email });

    if (findUserbyEmail) {
      return Resp.Error(
        'CONFLICT',
        'There is already a user created with this email, try with another'
      );
    }

    const findUserByUserName = await this.userRepository.findOneBy({
      username,
    });

    if (findUserByUserName) {
      return Resp.Error(
        'CONFLICT',
        `There is already a user created with this username, try with another`
      );
    }

    const { password } = registerUser;

    try {
      // ? Validar las áreas de interés
      let validAreas: Area[] = [];
      if (areasOfInterest) {
        validAreas = await this.areaRepository.findBy({
          id: In(areasOfInterest),
        });
        if (validAreas.length !== areasOfInterest.length) {
          return Resp.Error(
            'BAD_REQUEST',
            'Some areas of interest are invalid'
          );
        }
      }

      const newUser = await this.userRepository.create({
        ...registerUser,
        password: bcrypt.hashSync(password, HASH_SALT),
      });

      const user = await this.userRepository.save(newUser);

      // ? Establecer las relaciones con las áreas de interés
      if (areasOfInterest) {
        for (const area of validAreas) {
          const userArea = new UserArea();
          userArea.user = user;
          userArea.area = area;
          userArea.type = 'INTEREST';
          await this.userAreaRepository.save(userArea);
        }
      }

      const responseData = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      return Resp.Success(responseData, 'CREATED', 'User created successfully');
    } catch (error) {
      throw Resp.Error('BAD_REQUEST', 'Something went wrong');
    }
  }

  public async registerWithGoogle(user: CreateUserWithGoogleDTO) {
    console.log('entro a register with google');

    const newUser = this.userRepository.create(user);

    const userCreate = await this.userRepository.save(newUser);

    const responseData = {
      id: userCreate.id,
      email: userCreate.email,
      username: userCreate.username,
    };

    return responseData;
  }

  public async findAll(): Promise<User[]> {
    try {
      const users: User[] = await this.userRepository.find({
        relations: {
          lastUpdateBy: true,
        },
      });

      if (users.length === 0) {
        throw Resp.Error('BAD_REQUEST', 'No result found');
      }
      return users;
    } catch (error) {
      throw Resp.Error(error.message);
    }
  }

  async isUserRegisteredExternalProvider(idProvider: string, email: string) {
    const user = await this.userRepository.findOne({
      where: [{ googleId: idProvider }, { email }],
    });

    return user;
  }

  async findAllArgs(roles: ROLES[]): Promise<User[]> {
    if (!roles) return this.userRepository.find();

    return this.userRepository
      .createQueryBuilder()
      .where('ARRAY[roles] && ARRAY[:...roles]')
      .setParameter('roles', roles)
      .getMany();
  }

  public async findUserById(id: string): Promise<User> {
    try {
      const user: User = await this.userRepository.findOneBy({ id });

      if (!user) {
        throw Resp.Error('NOT_FOUND', 'custom error message');
      }

      return user;
    } catch (error) {
      throw Resp.Error(error);
    }
  }

  public async findUserByGoogleId(id: string): Promise<User> {
    try {
      const user: User = await this.userRepository.findOneBy({ googleId: id });

      if (!user) {
        throw Resp.Error('NOT_FOUND', 'custom error message');
      }

      return user;
    } catch (error) {
      throw Resp.Error(error);
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.findOneByOrFail({ email });
    } catch (error) {
      Resp.Error('NOT_FOUND', {
        code: 'not_found::',
        detail: `No user found with the email ${email}`,
      });
    }
  }

  public async findUserByIdWithProjects(id: string): Promise<User> {
    try {
      const user: User = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .leftJoinAndSelect('user.projectsIncludes', 'projectsIncludes')
        .leftJoinAndSelect('projectsIncludes.project', 'project')
        .getOne();

      if (!user) {
        throw Resp.Error('NOT_FOUND');
      }
      return user;
    } catch (error) {
      throw Resp.Error(error);
    }
  }

  public async relationToProject(userToProject: UserToProjectDTO) {
    try {
      return await this.userProjectRepository.save(userToProject);
    } catch (error) {
      throw Resp.Error(error);
    }
  }

  public async findBy({
    key,
    value,
  }: {
    key: keyof CreateUserDTO;
    value: any;
  }) {
    try {
      const user: User = await this.userRepository
        .createQueryBuilder()
        .addSelect('user.password')
        .where({ [key]: value })
        .getOne();

      return user;
    } catch (error) {
      throw Resp.Error(error);
    }
  }

  public async updateUser(
    updateUser: UpdateUserDTO,
    upadateBy: User
  ): Promise<User> {
    const { id } = updateUser;
    try {
      const user = await this.userRepository.preload({
        ...updateUser,
        id,
      });

      user.lastUpdateBy = upadateBy;

      return this.userRepository.save(user);
    } catch (error) {
      throw Resp.Error(error);
    }
  }

  public async deleteUser(id: string): Promise<User> {
    try {
      const user = await this.findUserById(id);

      user.isActive = false;
      user.deletedAt = new Date();

      return await this.userRepository.save(user);
    } catch (error) {
      throw Resp.Error(error);
    }
  }

  public async blockUser(
    id: string,
    timeBlocked: number,
    user: User
  ): Promise<User> {
    const userToBlock = await this.findUserById(id);
    const blockBy = await this.findUserById(user.id);

    userToBlock.isBlocked = true;
    userToBlock.timeBlocked = timeBlocked;
    userToBlock.lastUpdateBy = blockBy;

    return await this.userRepository.save(userToBlock);
  }

  async changeKnownPassword(
    id: string,
    currentPassword: string,
    newPassword: string
  ) {
    const user = await this.findUserById(id);

    if (!user || !user.password) {
      throw Resp.Error('BAD_REQUEST', 'Invalid user or password data.');
    }

    if (!currentPassword) {
      throw Resp.Error('BAD_REQUEST', 'Password not provided.');
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return Resp.Error('BAD_REQUEST', 'Current password is incorrect.');
    }

    if (currentPassword === newPassword) {
      return Resp.Error(
        'BAD_REQUEST',
        'The passwords are the same, if you want to change it you should enter another password.'
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, HASH_SALT);
    user.password = hashedPassword;
    await this.userRepository.save(user);
  }
}
