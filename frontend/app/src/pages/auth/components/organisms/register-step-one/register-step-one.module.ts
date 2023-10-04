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
import { FormRegisterStepOneComponent } from './register-step-one.component';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterStepOneComponent,
  },
];

@NgModule({
  declarations: [FormRegisterStepOneComponent],
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
  ],
  exports: [FormRegisterStepOneComponent],
})
export class FormRegisterStepComponentModule {}
