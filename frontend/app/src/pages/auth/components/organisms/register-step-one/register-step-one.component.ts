import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss'],
})
export class FormRegisterStepOneComponent {
  @Input({ required: true }) parentForm!: FormGroup;
  /* private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterStateService);

  formRegisterStepOne!: FormGroup; */

  get stepOneForm(): FormGroup {
    return this.parentForm.get('stepOne') as FormGroup;
  }

  /* ngOnInit(): void {
    this.formRegisterStepOne = this.formBuilder.group({
      nick: [''],
      email: [''],
    });
  }

  onRegister() {
    if (!this.formRegisterStepOne.valid) return;

    this.registerService.onRegister(this.formRegisterStepOne);
  } */
}
