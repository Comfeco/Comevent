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

  infos = [
    {
      id: 1,
      title: 'Registrate en Comevent',
      description:
        'Crea tu cuenta en Comevent y accede al mundo de las comunidades y eventos. ¡Tu próximo encuentro memorable comienza aquí!',
    },
    {
      id: 2,
      title: 'Busca tu comunidad favorita',
      description:
        'Explora comunidades que resuenan contigo y conecta con personas que comparten tus pasiones e intereses',
    },
    {
      id: 3,
      title: 'Regístrate en un evento',
      description:
        'Elige entre una diversidad de eventos y asegura tu lugar. ¡La aventura y el aprendizaje te esperan!',
    },
    {
      id: 4,
      title: 'Únete a tu grupo y disfruta',
      description:
        'Forma parte de un grupo que te inspira, participa en actividades exclusivas y disfruta cada momento junto a nosotros.',
    },
  ];

  onStep = (step: number) => {
    this.currentStep.set(step);
  };
}
