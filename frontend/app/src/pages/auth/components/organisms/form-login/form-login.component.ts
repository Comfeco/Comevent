import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormUtilitiesService } from '@utils';
import { LoginApiService } from '../../../service/api';
import { LoginStateService } from '../../../service/state';
import { RegisterUtilsService } from '../../../service/utils';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  protected registerUtils = inject(RegisterUtilsService);
  protected registerApi = inject(LoginApiService);
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginStateService);
  protected formUtilities = inject(FormUtilitiesService);

  formLogin!: FormGroup;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (!this.formLogin.valid) return;

    this.loginService.onSubmit(this.formLogin);
  }
}
