import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-hexagon-number-four',
  imports: [CommonModule],
  templateUrl: './icon-hexagon-number-four.component.html',
  styleUrls: ['./icon-hexagon-number-four.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHexagonNumberFourComponent {
  @Input({ required: true }) step!: number;
}
