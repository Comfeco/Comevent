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
  IconClearComponent,
  IconHiddenPassComponent,
  IconShowPassComponent,
} from '../..';
import { LabelComponent } from '../../atoms';
import { ErrorInputComponent } from '../../atoms/error-input/error-input.component';
import { ControlValueAccesorDirective } from '../../shared/directives/control-value-accesor.directive';
import { InputType } from './input.interface';

@Component({
  standalone: true,
  selector: 'c-input',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorInputComponent,
    LabelComponent,
    IconClearComponent,
    IconShowPassComponent,
    IconHiddenPassComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent<T>
  extends ControlValueAccesorDirective<T>
  implements InputType
{
  @Input() id = '';
  @Input() css: InputType['css'] = 'input-base';
  @Input() placeholder?: string | undefined;
  @Input() value?: string | number | undefined;
  @Input() customErrorMessages: Record<string, string> = {};
  @Input() name!: string;
  @Input() showPassword = false;
  @Input()
  set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  get inputType(): string {
    if (this.type === 'password' && this.showPassword) {
      return 'text';
    }
    return this.type;
  }

  clearInput() {
    if (this.control) {
      this.control.setValue('');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
