import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FacebookAuthGuard extends AuthGuard('facebook') {
  async canActivate(context: ExecutionContext) {
    console.log('FacebookAuthGuard: canActivate called');
    const activate = (await super.canActivate(context)) as boolean;
    console.log('FacebookAuthGuard: super.canActivate result:', activate);
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    console.log('FacebookAuthGuard: logIn called');
    return activate;
  }
}
