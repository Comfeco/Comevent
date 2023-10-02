import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { IconClearType } from '.';

@Component({
  standalone: true,
  selector: 'icon-clear',
  imports: [CommonModule],
  templateUrl: './icon-clear.component.html',
  styleUrls: ['./icon-clear.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconClearComponent implements IconClearType {
  @Input() color: IconClearType['color'] = 'error';
  @Input() type: IconClearType['type'] = 'outlined';
}
