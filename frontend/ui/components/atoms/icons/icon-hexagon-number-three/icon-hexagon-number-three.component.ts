import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-hexagon-number-three',
  imports: [CommonModule],
  templateUrl: './icon-hexagon-number-three.component.html',
  styleUrls: ['./icon-hexagon-number-three.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHexagonNumberThreeComponent {
  @Input({ required: true }) step!: number;
}
