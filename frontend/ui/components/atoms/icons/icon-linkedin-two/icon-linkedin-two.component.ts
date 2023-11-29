import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-linkedin-two',
  imports: [CommonModule],
  templateUrl: './icon-linkedin-two.component.html',
  styleUrls: ['./icon-linkedin-two.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkedinTwoComponent {
  @Input() color!: string;
}
