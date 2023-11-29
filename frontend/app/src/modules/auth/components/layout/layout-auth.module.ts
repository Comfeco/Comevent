import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContainerStepComponent } from '../organisms/container-step/container-step.component';
import { LayoutAuthComponent } from './layout-auth.component';

@NgModule({
  declarations: [LayoutAuthComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive,
    ContainerStepComponent,
    TranslateModule,
  ],
  exports: [LayoutAuthComponent],
})
export class LayoutAuthModule {}
