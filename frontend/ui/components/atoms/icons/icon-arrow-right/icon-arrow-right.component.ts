import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-arrow-right',
  imports: [CommonModule],
  templateUrl: './icon-arrow-right.component.html',
  styleUrls: ['./icon-arrow-right.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowRightComponent {
  @Input({ required: true }) index!: number;
}
