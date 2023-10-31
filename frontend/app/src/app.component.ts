import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginStateService } from './pages/auth/service/state';
import { AuthStatus } from './pages/auth/types';
import { supportLanguages } from './utils';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'Comevent';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(supportLanguages);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    /* const browserlang = this.translateService.getBrowserLang();
	 this.translateService.use(browserlang); */
  }

  private authService = inject(LoginStateService);
  private router = inject(Router);

  ngOnInit() {
    this.authService.initialize();
  }

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() === AuthStatus.CHECKING) {
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect(() => {
    const currentRoute = this.router.url;
    const allowedPublicRoutes = [
      '/auth/login',
      '/auth/register',
      '/auth/recover',
      '/auth/identity-providers-callback',
    ];

    const isChangePasswordRoute = (route: string): boolean => {
      const segments = route.split('/');
      return (
        segments.length >= 4 &&
        segments[1] === 'auth' &&
        segments[2] === 'reset-password'
      );
    };

    switch (this.authService.authStatus()) {
      case AuthStatus.AUTHENTICATED:
        if (
          allowedPublicRoutes.includes(currentRoute) ||
          isChangePasswordRoute(currentRoute)
        ) {
          this.router.navigateByUrl('/dashboard');
        }
        break;
      case AuthStatus.NOT_AUTHENTICATED:
        if (
          !allowedPublicRoutes.includes(currentRoute) &&
          !isChangePasswordRoute(currentRoute)
        ) {
          this.router.navigateByUrl('/auth/login');
        }
        break;
      case AuthStatus.RESETTING_PASSWORD:
        if (!isChangePasswordRoute(currentRoute)) {
          console.log('Redirecting to Reset Password...');
        }
        break;
      default:
        break;
    }
  });
}
