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
  selector: 'icon-pass',
  imports: [CommonModule],
  templateUrl: './icon-pass.component.html',
  styleUrls: ['./icon-pass.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPassComponent implements IconType {
  @Input() status: IconType['status'] = 'Pending';
}
