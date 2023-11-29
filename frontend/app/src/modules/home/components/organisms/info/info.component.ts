import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  IconArrowRightComponent,
  IconHexagonNumberFourComponent,
  IconHexagonNumberOneComponent,
  IconHexagonNumberThreeComponent,
  IconHexagonNumberTwoComponent,
  TitleComponent,
} from '@ui/components';
import { DescriptionInfoComponent } from '../..';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    IconArrowRightComponent,
    IconHexagonNumberOneComponent,
    IconHexagonNumberTwoComponent,
    IconHexagonNumberThreeComponent,
    IconHexagonNumberFourComponent,
    DescriptionInfoComponent,
    TranslateModule,
  ],
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  public currentStep = signal<number>(1);

  steps = [
    {
      step: 1,
      title: 'home.section.steps.subtitleOne',
    },
    {
      step: 2,
      title: 'home.section.steps.subtitleTwo',
    },
    {
      step: 3,
      title: 'home.section.steps.subtitleThree',
    },
    {
      step: 4,
      title: 'home.section.steps.subtitleFour',
    },
  ];

  infos = [
    {
      id: 1,
      title: 'home.section.steps.titleOne',
      description: 'home.section.steps.descriptionOne',
    },
    {
      id: 2,
      title: 'home.section.steps.titleTwo',
      description: 'home.section.steps.descriptionTwo',
    },
    {
      id: 3,
      title: 'home.section.steps.titleThree',
      description: 'home.section.steps.descriptionThree',
    },
    {
      id: 4,
      title: 'home.section.steps.titleFour',
      description: 'home.section.steps.descriptionFour',
    },
  ];

  onStep = (step: number) => {
    this.currentStep.set(step);
  };
}
