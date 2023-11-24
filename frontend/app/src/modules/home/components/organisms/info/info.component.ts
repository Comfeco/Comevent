import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  IconArrowRightComponent,
  IconHexagonNumberFourComponent,
  IconHexagonNumberOneComponent,
  IconHexagonNumberThreeComponent,
  IconHexagonNumberTwoComponent,
  TitleComponent,
} from '@ui/components';

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
      title: 'Paso 1',
    },
    {
      step: 2,
      title: 'Paso 2',
    },
    {
      step: 3,
      title: 'Paso 3',
    },
    {
      step: 4,
      title: 'Paso 4',
    },
  ];

  onStep = (step: number) => {
    this.currentStep.set(step);
  };
}
