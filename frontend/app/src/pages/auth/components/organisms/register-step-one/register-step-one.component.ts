import { Component, Input, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { LoginApiService } from '../../../service/api';

@Component({
  selector: 'register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss'],
})
export class FormRegisterStepOneComponent {
  registerApi = inject(LoginApiService);
  BASE_API: string = environment.baseUrl;

  @Input({ required: true }) parentForm!: FormGroup;

  get stepOneForm(): FormGroup {
    return this.parentForm.get('stepOne') as FormGroup;
  }
}
