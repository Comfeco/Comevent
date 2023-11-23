import { Route } from '@angular/router';
import { LayoutAuthComponent } from '../components';
import { IdentityProvidersCallbackComponent } from '../identity-providers-callback/identity-providers-callback.component';

export default [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((c) => c.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('./').then((c) => c.RegisterComponent),
      },
      {
        path: 'identity-providers-callback',
        component: IdentityProvidersCallbackComponent,
      },
    ],
  },
  {
    path: 'recover',
    loadComponent: () =>
      import('./recover/recover.component').then((c) => c.RecoverComponent),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./reset-pass/reset-pass.component').then(
        (c) => c.ResetPassComponent
      ),
  },
] as Route[];
