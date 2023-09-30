import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { StepComponent } from '../../molecules/step/step.component';

@Component({
  standalone: true,
  selector: 'c-container-step',
  imports: [CommonModule, StepComponent],
  templateUrl: './container-step.component.html',
  styleUrls: ['./container-step.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerStepComponent {}
