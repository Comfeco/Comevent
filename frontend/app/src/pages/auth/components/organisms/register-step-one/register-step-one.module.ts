import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonComponent,
  IconFacebookComponent,
  IconGoogleComponent,
  InputComponent,
  LabelComponent,
  TitleComponent,
} from '@ui/components';
import { FormRegisterStepOneComponent } from './register-step-one.component';

@NgModule({
  declarations: [FormRegisterStepOneComponent],
  imports: [
    CommonModule,
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
export class FormRegisterStepOneModule {}
