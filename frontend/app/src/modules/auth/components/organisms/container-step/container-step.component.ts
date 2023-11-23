import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { StepComponent } from '@ui/components';
import { RegisterUtilsService } from '../../../service/utils';

@Component({
  standalone: true,
  selector: 'c-container-step',
  imports: [CommonModule, StepComponent],
  templateUrl: './container-step.component.html',
  styleUrls: ['./container-step.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerStepComponent {
  protected registerService = inject(RegisterUtilsService);
}
