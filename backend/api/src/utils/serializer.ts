import { User } from '@db/entities';
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

  serializeUser(user: User, done: Function) {
    done(null, user.id);
  }

  async deserializeUser(partialUser: any, done: Function) {
    try {
      const user = await this.usersService.findUserById(partialUser.id);
      const retrievedUser = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      done(null, retrievedUser);
    } catch (err) {
      done(err);
    }
  }
}
