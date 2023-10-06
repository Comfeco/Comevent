import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* interface IRegisterStepTwo {
  password: string;
  repeatPassword: string;
} */

@Component({
  selector: 'register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss'],
})
export class FormRegisterStepTwoComponent {
  @Input({ required: true }) parentForm!: FormGroup;

  get stepTwoForm(): FormGroup {
    return this.parentForm.get('stepTwo') as FormGroup;
  }
}
