import { SECURE } from '@environments';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Resp } from '../../utils';
import dateUtils from './../../utils/dateUtils';
import encryptionUtils from './../../utils/encryptionUtils';

@Injectable()
export class PkceGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const redirectUrl = req.query['redirect_url'];
    const codeChallenge: any = req.query['code_challenge'];

    if (!redirectUrl || !codeChallenge) {
      Resp.Error('BAD_REQUEST', 'redirect_url and code_challenge are required');
    }

    const hashedCodeChallenge = encryptionUtils.HashString(codeChallenge);

    const expires = dateUtils.addMinutesToDate(new Date(), 15);
    const cookieOptions = {
      httpOnly: false,
      secure: SECURE,
      expires,
    };

    res.cookie('redirect_url', redirectUrl, cookieOptions);
    res.cookie('code_challenge', hashedCodeChallenge, cookieOptions);

    return true;
  }
}
