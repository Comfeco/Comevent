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

  async deserializeUser(id: any, done: Function) {
    try {
      const user = await await this.usersService.findUserById(id); // Esta función debe buscar al usuario por su ID en tu base de datos
      done(null, user);
    } catch (err) {
      done(err);
    }
  }
}
