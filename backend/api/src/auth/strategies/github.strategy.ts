import {
  GITHUB_CALLBACK_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} from '@config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github';
import { AuthProvider } from '../../../../database/src/constants/interfaces.entities';
import { CreateUserWithExternalProviderDTO } from '../../users/dto';
import { UsersService } from '../../users/users.service';
import { AuthService } from '../auth.service';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    super({
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);

    const { id, username, photos, emails } = profile;

    const usernameUnique = `${username}_${id}`;

    const provider = AuthProvider.GITHUB;

    const user: CreateUserWithExternalProviderDTO = {
      providerId: id,
      provider,
      email: emails[0].value,
      username: usernameUnique,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
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
      providerName: 'github',
    };
  }
}
