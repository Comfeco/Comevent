import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { LabelType } from './label.interface';

@Component({
  standalone: true,
  selector: 'c-label',
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent implements LabelType {
  @Input() variant: LabelType['variant'] = 'label-base';
  @Input() for?: string;
}
