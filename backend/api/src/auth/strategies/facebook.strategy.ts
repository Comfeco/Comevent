import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_URL,
} from '@config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { AuthProvider } from '../../../../database/src/constants/interfaces.entities';
import { CreateUserWithExternalProviderDTO } from '../../users/dto';
import { UsersService } from '../../users/users.service';
import { AuthService } from '../auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    super({
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: FACEBOOK_URL,
      profileFields: ['id', 'emails', 'name', 'photos'], // Los campos que deseas recuperar.
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);

    const { id, name, photos } = profile;

    const usernameUnique = `${name.givenName}_${id}`;

    const provider = AuthProvider.FACEBOOK;

    const user: CreateUserWithExternalProviderDTO = {
      providerId: id,
      provider,
      email: null,
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
      providerName: 'facebook',
    };
  }
}
