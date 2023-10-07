import { Injectable, signal } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { BaseResourceService } from '../../../../common';

@Injectable({
  providedIn: 'root',
})
export class RegisterUtilsService extends BaseResourceService<string> {
  step = signal<number>(1);
  formRegister!: FormGroup;
  areasSelected = signal<string[]>([]);
  customValidator!: ValidatorFn;
  minSelectedValidator!: ValidatorFn;

  /* constructor(
    _formBuilder: NonNullableFormBuilder,
    validatorsService: ValidatorsService,
    registerState: RegisterStateService
  ) {
    super();
    this._formBuilder = _formBuilder;
    this.validatorsService = validatorsService;
    this.registerState = registerState;

    this.initializeForm();
  } */

  /* private initializeForm(): void {
    const customValidator = this.validatorsService.similarInputs(
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
          validators: customValidator,
        }
      ),
      stepThree: this._formBuilder.group({
        actualAreaOfInterest: [
          null,
          [
            this.validatorsService.minItemsSelectedValidator(
              this.areasSelected,
              1
            ),
          ],
        ],
        areaOfInterest: [null],
      }),
    });
  } */

  insertToAreasSelected(item: string) {
    this.insertResource(item, this.areasSelected);
  }

  removeFromAreasSelected(area: string): void {
    this.removeResource(area, this.areasSelected);
  }

  /* markAllAsTouched(formGroup: FormGroup) {
    for (const controlKey in formGroup.controls) {
      console.log(controlKey);

      const control = formGroup.controls[controlKey];
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    }
  } */

  /* previous() {
    if (this.step() > 1) {
      this.step.update((value) => --value);
    }
  } */

  /* next() {
    if (this.step() === 1) {
      if (!this.formRegister.get('stepOne')?.valid) {
        this.markAllAsTouched(this.formRegister.get('stepOne') as FormGroup);
        return;
      }
      this.step.update((value) => ++value);
    } else if (this.step() === 2) {
      if (!this.formRegister.get('stepTwo')?.valid) {
        this.markAllAsTouched(this.formRegister.get('stepTwo') as FormGroup);
        return;
      }
      this.step.update((value) => ++value);
    }
    // ... y así sucesivamente para otros pasos
  } */

  /* isCurrentStepValid(): boolean {
    switch (this.step()) {
      case 1:
        return this.formRegister.get('stepOne')?.valid || false;
      case 2:
        return this.formRegister.get('stepTwo')?.valid || false;
      case 3:
        return this.formRegister.get('stepThree')?.valid || false;
      default:
        return false;
    }
  } */

  /* submit(event: Event) {
    event.preventDefault();
    if (this.formRegister.valid) {
      const formData = this.formRegister.getRawValue();
      const registerData: IRegisterData = {
        username: formData.stepOne.nick,
        email: formData.stepOne.email,
        password: formData.stepTwo.password,
        areasOfInterest: formData.stepThree.areaOfInterest,
      };
      this.registerState.onRegister(registerData);
    }
  }
 */
  /* getButtonText(): string {
    if (this.step() === 3) {
      return 'Submit';
    }
    return 'Next';
  } */
}
