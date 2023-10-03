import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { IconUserType } from './icon-user.interface';

@Component({
  standalone: true,
  selector: 'icon-user',
  imports: [CommonModule],
  templateUrl: './icon-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserComponent implements IconUserType {
  @Input() color: IconUserType['color'] = 'primary';
}
