import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

export class SessionSerializer extends PassportSerializer {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    super();
  }

  serializeUser(data: IUserAuthResponse, done: Function) {
    console.log('Serializing user');
    console.log('User serialization: ', data);

    done(null, data.user.id);
  }

  async deserializeUser(partialUser: any, done: Function) {
    try {
      const user = await this.usersService.findUserById(partialUser.id);
      console.log('User deserialize:', user);

      if (!user) {
        console.error('User not found in database during deserialization.');
        done(new Error('User not found'));
        return;
      }
      const retrievedUser = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      done(null, retrievedUser);
    } catch (err) {
      console.error('Error during deserialization:', err);
      done(err);
    }
  }
}
