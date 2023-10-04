import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  ButtonComponent,
  IconFacebookComponent,
  IconGoogleComponent,
  InputComponent,
  LabelComponent,
  TitleComponent,
} from '@ui/components';
import { FormRegisterStepComponentModule } from '../register-step-one';
import { FormRegisterComponent } from './form-register.component';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterComponent,
  },
];

@NgModule({
  declarations: [FormRegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TitleComponent,
    InputComponent,
    LabelComponent,
    ButtonComponent,
    IconGoogleComponent,
    IconFacebookComponent,
    FormRegisterStepComponentModule,
  ],
  exports: [FormRegisterComponent],
})
export class FormRegisterModule {}
