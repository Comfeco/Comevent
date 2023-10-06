import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { IconType } from '../icon.interface';

@Component({
  standalone: true,
  selector: 'icon-basic',
  imports: [CommonModule],
  templateUrl: './icon-basic.component.html',
  styleUrls: ['./icon-basic.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBasicComponent implements IconType {
  @Input() status: IconType['status'] = 'Pending';
}
