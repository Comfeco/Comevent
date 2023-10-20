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
    console.log('PkceGuard activated');
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const redirectUrl = req.query['redirect_url'];
    const codeChallenge: any = req.query['code_challenge'];
    console.log('redirectUrl:', redirectUrl);
    console.log('codeChallenge:', codeChallenge);

    if (!redirectUrl || !codeChallenge) {
      console.error('Error: redirect_url and code_challenge are required');
      Resp.Error('BAD_REQUEST', 'redirect_url and code_challenge are required');
    }

    const hashedCodeChallenge = encryptionUtils.HashString(codeChallenge);
    console.log('hashedCodeChallenge:', hashedCodeChallenge);

    const expires = dateUtils.addMinutesToDate(new Date(), 15);
    const cookieOptions = {
      httpOnly: false,
      secure: SECURE,
      expires,
    };

    res.cookie('redirect_url', redirectUrl, cookieOptions);
    res.cookie('code_challenge', hashedCodeChallenge, cookieOptions);
    console.log('Cookies set');

    return true;
  }
}
