import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_URL } from '@config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthProvider } from '../../../../database/src/constants/interfaces.entities';
import { CreateUserWithExternalProviderDTO } from '../../users/dto';
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
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'openid',
      ],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);

    const { id, name, photos, emails } = profile;

    const usernameUnique = `${name.givenName}_${id}`;

    const provider = AuthProvider.GOOGLE;

    const user: CreateUserWithExternalProviderDTO = {
      providerId: id,
      provider,
      email: emails[0].value,
      username: usernameUnique,
      firstName: name.givenName,
      lastName: name.familyName,
      avatar: photos[0].value,
    };

    const existingUser =
      await this.usersService.isUserRegisteredExternalProvider(provider, id);

    let userToReturn;

    if (existingUser) {
      userToReturn = existingUser;
    } else {
      userToReturn = await this.usersService.registerWithExternalProvider(user);
    }

    const providerToken = await this.authService.generateProviderToken(
      userToReturn.id,
      provider
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
