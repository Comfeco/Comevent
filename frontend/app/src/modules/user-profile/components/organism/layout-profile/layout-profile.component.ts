import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonHeaderProfileComponent } from '../..';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonHeaderProfileComponent],
  selector: 'layout-profile',
  templateUrl: './layout-profile.component.html',
  styleUrls: ['./layout-profile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LayoutProfileComponent {
  route = inject(Router);

  routes = [
    {
      icon: 'icon-profile',
      title: 'Mi perfil',
      link: '/user/profile',
    },
    /* {
      icon: 'icon-badges',
      title: 'Insignias',
      link: '/user/badges',
    }, */
    {
      icon: 'icon-groups',
      title: 'Grupos',
      link: '/user/groups',
    },
    {
      icon: 'icon-events',
      title: 'Eventos',
      link: '/user/events',
    },
    {
      icon: 'icon-communities',
      title: 'Comunidades',
      link: '/user/communities',
    },
  ];
}
