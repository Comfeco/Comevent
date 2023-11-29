import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStatus, LoginStateService } from '../../modules/auth';

export const PublicGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginStateService);
  const router = inject(Router);

  if (authService.authStatus() === AuthStatus.AUTHENTICATED) {
    router.navigateByUrl('/user/profile');
    return false;
  }

  return true;
};
