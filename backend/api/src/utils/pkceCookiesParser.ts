import { Request, Response } from 'express';

export class PKCEUtils {
  static parseCookiesFromReq(request: Request): IPKCEClientData {
    const redirectUrl = request.cookies['redirect_url'];
    const codeChallenge = request.cookies['code_challenge'];
    return {
      redirectUrl,
      codeChallenge,
    };
  }

  static deletePkceCookies(res: Response): void {
    res.cookie('redirect_url', '', { expires: new Date(0) });
    res.cookie('code_challenge', '', { expires: new Date(0) });
  }
}

export interface IPKCEClientData {
  redirectUrl: string;
  codeChallenge: string;
}
