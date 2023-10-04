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
  /* private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterStateService);
  protected validatorsService = inject(ValidatorsService);

  formRegisterStepTwo!: FormGroup;
  customValidator!: ValidatorFn; */

  get stepTwoForm(): FormGroup {
    return this.parentForm.get('stepTwo') as FormGroup;
  }

  /* ngOnInit(): void {
    this.customValidator = this.validatorsService.similarInputs(
      'password',
      'passRepeat'
    );

    this.formRegisterStepTwo = this.formBuilder.group(
      {
        password: [''],
        passRepeat: [''],
      },
      {
        validators: this.customValidator,
      }
    );
  }

  onRegister() {
    if (!this.formRegisterStepTwo.valid) return;

    this.registerService.onRegister(this.formRegisterStepTwo);
  } */
}
