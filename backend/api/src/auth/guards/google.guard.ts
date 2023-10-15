import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext) {
    console.log('GoogleAuthGuard: canActivate called');
    const activate = (await super.canActivate(context)) as boolean;
    console.log('GoogleAuthGuard: super.canActivate result:', activate);
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    console.log('GoogleAuthGuard: logIn called');
    return activate;
  }
}
