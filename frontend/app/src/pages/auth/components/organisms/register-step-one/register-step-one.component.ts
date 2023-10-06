import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss'],
})
export class FormRegisterStepOneComponent {
  @Input({ required: true }) parentForm!: FormGroup;

  get stepOneForm(): FormGroup {
    return this.parentForm.get('stepOne') as FormGroup;
  }
}
