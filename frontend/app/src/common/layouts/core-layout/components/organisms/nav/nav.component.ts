import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ButtonComponent,
  IconComeventComponent,
  TitleComponent,
} from '@ui/components';

@Component({
  standalone: true,
  selector: 'c-nav',
  imports: [
    CommonModule,
    IconComeventComponent,
    TitleComponent,
    RouterModule,
    ButtonComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavComponent {}
