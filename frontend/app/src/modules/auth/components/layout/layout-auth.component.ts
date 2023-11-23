import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-auth',
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.scss'],
})
export class LayoutAuthComponent {
  protected router = inject(Router);

  get isRegisterRoute(): boolean {
    return this.router.url === '/auth/register';
  }
}
