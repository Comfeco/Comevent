import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonComponent,
  ChipComponent,
  IconFacebookComponent,
  IconGoogleComponent,
  LabelComponent,
  SelectComponent,
  TitleComponent,
} from '@ui/components';
import { TranslateAreasPipe } from '../../../../../utils/pipes';
import { FormRegisterStepThreeComponent } from './register-step-three.component';

@NgModule({
  declarations: [FormRegisterStepThreeComponent, TranslateAreasPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TitleComponent,
    SelectComponent,
    LabelComponent,
    ButtonComponent,
    IconGoogleComponent,
    IconFacebookComponent,
    ChipComponent,
    TranslateModule,
  ],
  exports: [FormRegisterStepThreeComponent],
})
export class FormRegisterStepThreeModule {}
