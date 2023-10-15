import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterApiService } from '../service/api';
import { LoginStateService } from '../service/state';

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
        next: ({ data, response }) => {
          console.log('data user', data);

          this.loginState.setAuthtication(data);
        },
        error: (err: any) => {
          console.error('Error during claimToken:', err);
          this.router.navigateByUrl('/auth/login');
        },
        complete: () => {
          console.log('Completed without error and without data');
        },
      });
    } else {
      console.log('salto acá');

      this.router.navigateByUrl('/');
    }
  }
}
