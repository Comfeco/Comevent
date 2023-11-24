import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconArrowRightComponent, TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    IconArrowRightComponent,
    TranslateModule,
  ],
  selector: 'characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
})
export class CharacteristicsComponent {
  characteristics = [
    {
      id: 0,
      icon: './assets/svg/icon-events.svg',
      title: 'home.section.characteristics.subtitleOne',
      description: 'home.section.characteristics.descriptionOne',
    },
    {
      id: 1,
      icon: './assets/svg/icon-community.svg',
      title: 'home.section.characteristics.subtitleTwo',
      description: 'home.section.characteristics.descriptionTwo',
    },
    {
      id: 2,
      icon: './assets/svg/icon-merchandising.svg',
      title: 'home.section.characteristics.subtitleThree',
      description: 'home.section.characteristics.descriptionThree',
    },
  ];
}
