import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { SEED_DATA } from '../../../config/constants';
import { Community, User, UsersCommunities } from '../src/lib/entities';

export default class UsersProjectsSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const userRepository = dataSource.getRepository(User);
    const projectRepository = dataSource.getRepository(Community);
    const usersProjectsRepository = dataSource.getRepository(UsersCommunities);

    const allUsers = await userRepository.find();
    const allProjects = await projectRepository.find();

    if (allUsers.length === 0 || allProjects.length === 0) {
      throw new Error('No users or projects exist');
    }

    const usersProjectsFactory = await factoryManager.get(UsersCommunities);
    for (let i = 0; i < SEED_DATA; i++) {
      // selecciona un usuario y un proyecto aleatorios
      const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];
      const randomProject =
        allProjects[Math.floor(Math.random() * allProjects.length)];

      // crea un nuevo UsersProjects y lo guarda en la base de datos
      const usersProject = await usersProjectsFactory.make();
      usersProject.user = randomUser;
      usersProject.community = randomProject;

      await usersProjectsRepository.save(usersProject);
    }
  }
}
