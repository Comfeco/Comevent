import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ErrorInputComponent,
  LabelComponent,
  TitleComponent,
} from '../../atoms';
import { IconLoadingComponent } from '../../atoms/icons';
import { ControlValueAccesorDirective } from '../../shared/directives/control-value-accesor.directive';
import { SelectType } from './select.interface';

@Component({
  standalone: true,
  selector: 'c-select',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TitleComponent,
    IconLoadingComponent,
    LabelComponent,
    ErrorInputComponent,
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent<T>
  extends ControlValueAccesorDirective<T>
  implements SelectType<T>
{
  @Input() options: T[] = [];
  @Input() id = '';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() variant: SelectType<T>['variant'] = 'select-base';
  @Input()
  set disabled(value: boolean) {
    this.setDisabledState(value);
  }
}
