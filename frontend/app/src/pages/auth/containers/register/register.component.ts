import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ValidatorFn } from '@angular/forms';
import { ValidatorsService } from '@utils';
import { RegisterStateService } from '../../service/state';
import { RegisterUtilsService } from '../../service/utils';
import { IRegisterData } from '../../types';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private _formBuilder = inject(NonNullableFormBuilder);
  protected validatorsService = inject(ValidatorsService);
  protected registerUtils = inject(RegisterUtilsService);
  protected registerState = inject(RegisterStateService);
  formRegister!: FormGroup;
  customValidator!: ValidatorFn;
  minSelectedValidator!: ValidatorFn;

  ngOnInit(): void {
    this.customValidator = this.validatorsService.similarInputs(
      'password',
      'passRepeat'
    );

    this.formRegister = this._formBuilder.group({
      stepOne: this._formBuilder.group({
        nick: '',
        email: '',
      }),
      stepTwo: this._formBuilder.group(
        {
          password: '',
          passRepeat: '',
        },
        {
          validators: this.customValidator,
        }
      ),
      stepThree: this._formBuilder.group({
        actualAreaOfInterest: [
          null,
          [
            this.validatorsService.minItemsSelectedValidator(
              this.registerUtils.areasSelected,
              1
            ),
          ],
        ],
        areaOfInterest: [null],
      }),
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
      case 3:
        return this.formRegister.get('stepThree')?.valid || false;
      default:
        return false;
    }
  }

  getButtonText(): string {
    if (this.registerUtils.step() === 3) {
      return 'Submit';
    }
    return 'Next';
  }

  submit(event: Event) {
    if (this.formRegister.valid) {
      const formData = this.formRegister.getRawValue();
      const registerData: IRegisterData = {
        username: formData.stepOne.nick,
        email: formData.stepOne.email,
        password: formData.stepTwo.password,
        areasOfInterest: formData.stepThree.areaOfInterest,
      };
      this.registerState.onRegister(registerData);
      this.formRegister.reset();
    }
  }

  onButtonClick(event: Event): void {
    if (this.registerUtils.step() === 3) {
      this.submit(event);
    } else {
      this.next();
    }
  }
}
