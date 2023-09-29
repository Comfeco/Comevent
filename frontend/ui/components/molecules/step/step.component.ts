import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInputComponent } from '../../atoms/error-input/error-input.component';
import { Status, StepType } from './step.interface';

@Component({
  standalone: true,
  selector: 'c-step',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorInputComponent,
  ],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent implements StepType {
  @Input() info!: string;
  @Input() status: Status = Status.IN_PROGRESS;
  @Input() logo: StepType['logo'] = 'area';

  public Status = Status;
}
