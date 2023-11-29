import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@ui/components';
import { DescriptionSubscribeComponent, InputSubscribeComponent } from '../..';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    InputSubscribeComponent,
    DescriptionSubscribeComponent,
  ],
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent {}
