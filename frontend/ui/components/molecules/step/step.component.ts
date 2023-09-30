import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  IconAreaComponent,
  IconBasicComponent,
  IconPassComponent,
} from '../../atoms/icons';
import { StepType } from './step.interface';

@Component({
  standalone: true,
  selector: 'c-step',
  imports: [
    CommonModule,
    IconAreaComponent,
    IconPassComponent,
    IconBasicComponent,
  ],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent implements StepType {
  @Input() status: StepType['status'] = 'Pending';
  @Input() logo: StepType['logo'] = 'area';
}
