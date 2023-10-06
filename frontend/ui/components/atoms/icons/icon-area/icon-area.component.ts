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
  selector: 'icon-area',
  imports: [CommonModule],
  templateUrl: './icon-area.component.html',
  styleUrls: ['./icon-area.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAreaComponent implements IconType {
  @Input() status: IconType['status'] = 'Pending';
}
