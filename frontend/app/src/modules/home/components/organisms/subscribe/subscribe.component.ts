import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent, TitleComponent } from '@ui/components';
import { InputSubscribeComponent } from '../..';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TitleComponent,
    InputSubscribeComponent,
  ],
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent {}
