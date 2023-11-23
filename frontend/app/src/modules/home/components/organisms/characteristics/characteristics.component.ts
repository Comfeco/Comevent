import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconArrowRightComponent, TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, IconArrowRightComponent],
  selector: 'characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
})
export class CharacteristicsComponent {
  characteristics = [
    {
      id: 0,
      icon: './assets/svg/icon-events.svg',
      title: 'Eventos',
      description:
        'Descubre y participa en una amplia gama de eventos emocionantes. Desde proyectos hasta charlas, conecta con experiencias únicas que te inspiran y enriquecen.',
    },
    {
      id: 1,
      icon: './assets/svg/icon-community.svg',
      title: 'Comunidades',
      description:
        'Únete a nuestras comunidades vibrantes y encuentra personas con intereses comunes. Colabora, comparte ideas y crea lazos en un espacio acogedor y dinámico.',
    },
    {
      id: 2,
      icon: './assets/svg/icon-merchandising.svg',
      title: 'Comercialización',
      description:
        'Lleva contigo un pedazo de la experiencia con nuestra exclusiva selección de merchandising. Productos de calidad que celebran tus eventos y comunidades favoritas.',
    },
  ];
}
