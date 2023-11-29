import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-hexagon-number-two',
  imports: [CommonModule],
  templateUrl: './icon-hexagon-number-two.component.html',
  styleUrls: ['./icon-hexagon-number-two.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHexagonNumberTwoComponent {
  @Input({ required: true }) step!: number;
}
