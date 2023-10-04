import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { ValidatorsService } from '@utils';
import { RegisterStateService } from '../../../service/state/register.state.service';

/* interface IRegisterStepTwo {
  password: string;
  repeatPassword: string;
} */

@Component({
  selector: 'register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.scss'],
})
export class FormRegisterStepTwoComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterStateService);
  protected validatorsService = inject(ValidatorsService);

  formRegisterStepTwo!: FormGroup;
  customValidator!: ValidatorFn;

  ngOnInit(): void {
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
  }
}
