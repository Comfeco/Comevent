import { Component, Input, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthProvider } from '@db/constants';
import { environment } from '../../../../../environments/environment';
import { LoginApiService } from '../../../service/api';
import { RegisterUtilsService } from '../../../service/utils';

@Component({
  selector: 'register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss'],
})
export class FormRegisterStepOneComponent {
  protected registerUtils = inject(RegisterUtilsService);
  protected registerApi = inject(LoginApiService);
  AuthProvider = AuthProvider;
  BASE_API: string = environment.baseUrl;

  @Input({ required: true }) parentForm!: FormGroup;

  get stepOneForm(): FormGroup {
    return this.parentForm.get('stepOne') as FormGroup;
  }
}
