import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonComponent,
  IconGithubComponent,
  IconGoogleComponent,
  InputComponent,
  LabelComponent,
  TitleComponent,
} from '@ui/components';
import { FormLoginComponent } from './form-login.component';

const routes: Routes = [
  {
    path: '',
    component: FormLoginComponent,
  },
];

@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TitleComponent,
    InputComponent,
    LabelComponent,
    ButtonComponent,
    IconGoogleComponent,
    IconGithubComponent,
    TranslateModule,
  ],
  exports: [FormLoginComponent],
})
export class FormLoginModule {}
