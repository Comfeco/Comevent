import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  ButtonComponent,
  InputComponent,
  LabelComponent,
  TitleComponent,
} from '@ui/components';
import { FormRegisterStepOneModule } from '../../components/organisms/register-step-one';
import { FormRegisterStepThreeModule } from '../../components/organisms/register-step-three/register-step-three.module';
import { FormRegisterStepTwoModule } from '../../components/organisms/register-step-two/register-step-two.module';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormRegisterStepOneModule,
    FormRegisterStepTwoModule,
    FormRegisterStepThreeModule,
    TitleComponent,
    InputComponent,
    LabelComponent,
    ButtonComponent,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
