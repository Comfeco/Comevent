import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PrivateGuard, PublicGuard } from './common';
import { LayoutRootComponent } from './common/layouts/core-layout/components/container/template-root/root.component';

export const routes: Route[] = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      {
        path: 'auth',
        canActivate: [PublicGuard],
        loadChildren: () => import('./modules/auth/pages/routes'),
      },
      {
        path: 'user',
        canActivate: [PrivateGuard],
        loadChildren: () => import('./modules/user-profile/pages/routes'),
      },
      {
        path: '',
        loadComponent: () =>
          import('./modules/home').then((module) => module.HomeComponent),
      },
      /* {
        path: '**',
        redirectTo: '/',
      }, */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
