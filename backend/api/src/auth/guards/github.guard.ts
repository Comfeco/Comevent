import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GithubAuthGuard extends AuthGuard('github') {
  async canActivate(context: ExecutionContext) {
    console.log('GithubAuthGuard: canActivate called');
    const activate = (await super.canActivate(context)) as boolean;
    console.log('GithubAuthGuard: super.canActivate result:', activate);
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    console.log('GithubAuthGuard: logIn called');
    return activate;
  }
}
