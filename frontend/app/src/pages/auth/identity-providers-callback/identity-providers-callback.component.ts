import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterApiService } from '../service/api';
import { LoginStateService } from '../service/state';
import { AuthStatus } from '../types';

@Component({
  selector: 'app-identity-providers-callback',
  templateUrl: './identity-providers-callback.component.html',
  styleUrls: ['./identity-providers-callback.component.scss'],
})
export class IdentityProvidersCallbackComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private loginState = inject(LoginStateService);
  private registerApi = inject(RegisterApiService);
  private router = inject(Router);

  ngOnInit(): void {
    const routeSnapShot = this.activatedRoute.snapshot;

    const routeParams = routeSnapShot.queryParams;

    const code = routeParams['code'];
    const provider = routeParams['provider'];
    const id = routeParams['userId'];

    console.log(code, provider, id, routeParams);

    if (code && provider && id) {
      this.registerApi.claimToken(code, id, provider).subscribe({
        next: () => {
          this.loginState._authStatus.set(AuthStatus.AUTHENTICATED);
          console.log('Entro a next');

          localStorage.setItem('token', code);

          this.router.navigateByUrl('/dashboard');
        },
        error: (err: any) => {
          this.router.navigateByUrl('/auth/login');
        },
      });
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
