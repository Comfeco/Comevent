import { User } from '@db/entities';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UsersService } from '../users/users.service';
import { PKCEUtils, Resp, encryptionUtils } from '../utils';
import { AuthService } from './auth.service';
import {
  ChangePassDoc,
  CurrentUser,
  LoginDoc,
  Public,
  ResetPassDoc,
  RevalidateDoc,
  SignupDoc,
} from './decorators';
import { AuthDTO, ChangePassDTO, LoginDTO } from './dto';
import { JwtAuthGuard, PkceGuard } from './guards';
import { AuthGuard } from './guards/auth.guard';
import { GoogleAuthGuard } from './guards/google.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @Post('signup')
  @SignupDoc()
  async register(@Body() authInput: AuthDTO) {
    return this.authService.signup(authInput);
  }

  @Post('login')
  @LoginDoc()
  async login(@Body() loginInput: LoginDTO) {
    return this.authService.login(loginInput);
  }

  @Get('google')
  @UseGuards(PkceGuard, PassportAuthGuard('google'))
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  handleRedirect(@Req() req: Request, @Res() res: Response) {
    const cookiesData = PKCEUtils.parseCookiesFromReq(req);

    console.log('cookiesData: ', cookiesData);

    if (!cookiesData.codeChallenge || !cookiesData.redirectUrl) {
      return Resp.Error('INTERNAL_SERVER_ERROR');
    }

    console.log('req.user: ', req.user);

    if (req.isAuthenticated()) {
      const userFromRequest: IUserAuthResponse = req.user;
      return res.redirect(
        `${cookiesData.redirectUrl}?code=${encodeURIComponent(
          userFromRequest['providerToken']
        )}&provider=${userFromRequest['providerName']}&userId=${
          userFromRequest['user']['id']
        }`
      );

      /* const userResponse = {
        id: userFromRequest['user']['id'],
        email: userFromRequest['user']['email'],
        username: userFromRequest['user']['username'],
      };

      return Resp.Success(userResponse, 'OK'); */
    }

    return res.redirect(
      `${cookiesData.redirectUrl}?message=An error has been occurred`
    );

    // return Resp.Error('BAD_REQUEST', 'An error has been occurred');
  }

  @Post('token')
  async claimSession(@Req() req: Request, @Res() res: Response) {
    const clientData = PKCEUtils.parseCookiesFromReq(req);
    PKCEUtils.deletePkceCookies(res);
    const { codeVerifier, token, id, provider } = req.body;

    const codeChallenge = clientData.codeChallenge;

    console.log('codeVerifier:', codeVerifier);
    console.log('codeChallenge (from cookie):', codeChallenge);
    console.log(
      'Hashed codeVerifier:',
      encryptionUtils.HashString(codeVerifier)
    );

    if (encryptionUtils.HashString(codeVerifier) !== codeChallenge) {
      console.error('Invalid code verifier');
      return Resp.Error('BAD_REQUEST', 'Invalid code verifier');
    }

    const tokenIsValid = await this.authService.checkIdentityProviderToken(
      token,
      id,
      provider
    );
    if (!tokenIsValid) {
      console.error('Invalid identity provider token');
      return Resp.Error('BAD_REQUEST', 'Invalid identity provider token');
    }

    const user = await this.userService.findUserById(id);

    if (!user) {
      console.error('User not found');
      return Resp.Error('NOT_FOUND', 'User not found');
    }

    const { email, username, isActive, isBlocked, roles } = user;

    const userClaims = this.userService.getUserClaims(user);
    const jwt = this.authService.getJwtToken({
      id: user.id,
      claims: userClaims,
    });

    return res.status(200).json({
      data: {
        token: jwt,
        id: user.id,
        email,
        username,
        isActive,
        isBlocked,
        roles,
      },
      response: {
        status: 'OK',
        message: 'You have started correctly',
        success: true,
        code: 200,
      },
    });

    /* const responseData = {
      token: jwt,
      id: user.id,
      email: user.email,
      username: user.username,
      isActive: user.isActive,
      isBlocked: user.isBlocked,
      roles: user.roles,
    };
    return Resp.Success(responseData, 'OK'); */
  }

  @Get('revalidate')
  @UseGuards(JwtAuthGuard, AuthGuard)
  @RevalidateDoc()
  async revalidateToken(@CurrentUser() user: User) {
    const result = this.authService.revalidateToken(user);
    return result;
  }

  @Post('recover')
  @ResetPassDoc()
  async requestPasswordReset(@Body('email') email: string) {
    await this.authService.requestPasswordReset(email);
    return Resp.Success<object>(
      {},
      'OK',
      'If an account with that email exists, we sent you an email to reset your password'
    );
  }

  @Post('change-password')
  @Public()
  @ChangePassDoc()
  async requestPasswordChange(@Body() changePass: ChangePassDTO) {
    const { id, token, password } = changePass;
    await this.authService.changePassword(id, token, password);

    return Resp.Success<object>(
      {},
      'ACCEPTED',
      'Your password has been successfully changed'
    );
  }
}
