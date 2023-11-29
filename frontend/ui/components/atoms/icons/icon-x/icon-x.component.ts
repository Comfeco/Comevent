import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-x',
  imports: [CommonModule],
  templateUrl: './icon-x.component.html',
  styleUrls: ['./icon-x.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconXComponent {
  @Input() color!: string;
}
