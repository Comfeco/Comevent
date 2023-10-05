import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
} from '@angular/forms';
import { ValidatorsService } from '@utils';
import { RegisterUtilsService } from '../../service/utils';

interface IRegisterUser {
  stepOne: FormControl<boolean>;
  stepTwo: FormControl<boolean>;
  stepThree: FormControl<boolean>;
}

interface IRegisterStepOne {
  nick: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private _formBuilder = inject(NonNullableFormBuilder);
  protected validatorsService = inject(ValidatorsService);
  protected registerUtils = inject(RegisterUtilsService);
  formRegister!: FormGroup;
  customValidator!: ValidatorFn;
  minSelectedValidator!: ValidatorFn;

  ngOnInit(): void {
    this.customValidator = this.validatorsService.similarInputs(
      'password',
      'passRepeat'
    );

    this.minSelectedValidator =
      this.validatorsService.minItemsSelectedValidator(
        () => this.registerUtils.areasSelected(),
        1
      );

    this.formRegister = this._formBuilder.group({
      stepOne: this._formBuilder.group({
        nick: ['doe'],
        email: ['doe@example.com'],
      }),
      stepTwo: this._formBuilder.group(
        {
          password: ['123456'],
          passRepeat: ['123456'],
        },
        {
          validators: this.customValidator,
        }
      ),
      stepThree: this._formBuilder.group(
        {
          areaOfInterest: [''],
        },
        {
          validators: this.minSelectedValidator,
        }
      ),
    });
  }

  previous() {
    if (this.registerUtils.step() > 1) {
      this.registerUtils.step.update((value) => --value);
    }
  }

  markAllAsTouched(formGroup: FormGroup) {
    for (const controlKey in formGroup.controls) {
      console.log(controlKey);

      const control = formGroup.controls[controlKey];
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    }

    console.log(this.formRegister.get('stepOne.nick')?.touched);
    console.log(this.formRegister.get('stepOne.email')?.touched);
  }

  next() {
    if (this.registerUtils.step() === 1) {
      if (!this.formRegister.get('stepOne')?.valid) {
        this.markAllAsTouched(this.formRegister.get('stepOne') as FormGroup);
        return;
      }
      this.registerUtils.step.update((value) => ++value);
    } else if (this.registerUtils.step() === 2) {
      if (!this.formRegister.get('stepTwo')?.valid) {
        this.markAllAsTouched(this.formRegister.get('stepTwo') as FormGroup);
        return;
      }
      this.registerUtils.step.update((value) => ++value);
    }
    // ... y así sucesivamente para otros pasos
  }

  isCurrentStepValid(): boolean {
    switch (this.registerUtils.step()) {
      case 1:
        return this.formRegister.get('stepOne')?.valid || false;
      case 2:
        return this.formRegister.get('stepTwo')?.valid || false;
      // ... y así sucesivamente para otros pasos
      default:
        return false;
    }
  }

  submit() {
    if (this.formRegister.valid) {
      // Procesa el registro aquí
    }
  }
}
