import { Injectable, inject, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ValidatorFn } from '@angular/forms';
import { BaseResourceService } from '../../../../common';
import { ValidatorsService } from '../../../../utils';

@Injectable({
  providedIn: 'root',
})
export class RegisterUtilsService extends BaseResourceService<string> {
  protected validatorsService = inject(ValidatorsService);
  private _formBuilder = inject(NonNullableFormBuilder);
  step = signal<number>(1);
  isLoadingProviderGoogle = signal<boolean>(false);
  isLoadingProviderGithub = signal<boolean>(false);
  //isLoadingProviderFacebook = signal<boolean>(false);
  formRegister!: FormGroup;
  areasSelected = signal<string[]>([]);
  customValidator!: ValidatorFn;
  minSelectedValidator!: ValidatorFn;

  initializeForm(): void {
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
  }

  getForm(): FormGroup {
    return this.formRegister;
  }

  insertToAreasSelected(item: string) {
    this.insertResource(item, this.areasSelected);
  }

  removeFromAreasSelected(area: string): void {
    this.removeResource(area, this.areasSelected);
  }

  previous() {
    if (this.step() > 1) {
      this.step.update((value) => --value);
    }
  }

  markAllAsTouched(formGroup: FormGroup) {
    for (const controlKey in formGroup.controls) {
      const control = formGroup.controls[controlKey];
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    }
  }

  isCurrentStepValid(): boolean {
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
  }

  getButtonText(): string {
    if (this.step() === 3) {
      return 'Submit';
    }
    return 'Next';
  }
}
