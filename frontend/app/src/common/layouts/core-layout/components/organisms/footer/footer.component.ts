import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonComponent,
  IconComeventComponent,
  TitleComponent,
} from '@ui/components';
import { DarkModeComponent } from '../../atoms';

@Component({
  standalone: true,
  selector: 'c-footer',
  imports: [
    CommonModule,
    IconComeventComponent,
    TitleComponent,
    RouterModule,
    ButtonComponent,
    TranslateModule,
    DarkModeComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent {
  sponsors = [
    {
      web: 'https://www.comfeco.com/',
      logo: './assets/svg/icon-comfeco.svg',
      description: 'icon-comfeco',
    },
    {
      web: 'https://discord.gg/k7hpAbvjmx',
      logo: './assets/svg/icon-community-code.svg',
      description: 'icon-community-code',
    },
    {
      web: 'https://discord.gg/indie-creators-hq-by-serudda-972567584580984852',
      logo: './assets/svg/icon-indie-creators.svg',
      description: 'icon-indie-creators',
    },
  ];

  networks = [
    {
      web: 'https://twitter.com/Comevent_',
      logo: './assets/svg/icon-twitter.svg',
      description: 'icon-twitter',
    },
    {
      web: 'https://www.facebook.com/comevent1/',
      logo: './assets/svg/icon-facebook.svg',
      description: 'icon-facebook',
    },
    {
      web: 'https://www.comfeco.com/',
      logo: './assets/svg/icon-linkedin.svg',
      description: 'icon-linkedin',
    },
  ];
}
