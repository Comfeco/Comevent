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
import { FormRegisterStepTwoComponent } from './register-step-two.component';

/* const routes: Routes = [
  {
    path: '',
    component: FormRegisterStepTwoComponent,
  },
]; */

@NgModule({
  declarations: [FormRegisterStepTwoComponent],
  imports: [
    CommonModule,
    /* RouterModule.forChild(routes), */
    ReactiveFormsModule,
    TitleComponent,
    InputComponent,
    LabelComponent,
    ButtonComponent,
    IconGoogleComponent,
    IconFacebookComponent,
  ],
  exports: [FormRegisterStepTwoComponent],
})
export class FormRegisterStepTwoModule {}
