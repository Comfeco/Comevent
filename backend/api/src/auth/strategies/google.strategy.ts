import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_URL } from '@config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { CreateUserWithGoogleDTO } from '../../users/dto';
import { UsersService } from '../../users/users.service';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    super({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);

    const { id, _json } = profile;
    const { given_name, family_name, email, picture } = _json;

    const usernameUnique = `${given_name}_${id}`;

    const user: CreateUserWithGoogleDTO = {
      googleId: id,
      email: email,
      username: usernameUnique,
      firstName: given_name,
      lastName: family_name,
      avatar: picture,
    };

    const existingUser =
      await this.usersService.isUserRegisteredExternalProvider(id, email);

    let userToReturn;

    if (existingUser) {
      userToReturn = existingUser;
    } else {
      userToReturn = await this.usersService.registerWithGoogle(user);
    }

    const providerToken = await this.authService.generateProviderToken(
      userToReturn.id,
      'google'
    );

    console.log('Validate');
    console.log(userToReturn);

    return {
      user: userToReturn,
      providerToken,
      providerName: 'google',
    };
  }
}
