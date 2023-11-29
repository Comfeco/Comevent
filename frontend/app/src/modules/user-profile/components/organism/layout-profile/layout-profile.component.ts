import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonHeaderProfileComponent } from '../..';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonHeaderProfileComponent,
    TranslateModule,
  ],
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
      title: 'user.section.profile.buttonOne',
      link: '/user/profile',
    },
    /* {
      icon: 'icon-badges',
      title: 'Insignias',
      link: '/user/badges',
    }, */
    {
      icon: 'icon-groups',
      title: 'user.section.profile.buttonTwo',
      link: '/user/groups',
    },
    {
      icon: 'icon-events',
      title: 'user.section.profile.buttonThree',
      link: '/user/events',
    },
    {
      icon: 'icon-communities',
      title: 'user.section.profile.buttonFour',
      link: '/user/communities',
    },
  ];
}
