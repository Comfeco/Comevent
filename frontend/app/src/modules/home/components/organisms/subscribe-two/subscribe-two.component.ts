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
  selector: 'subscribe-two',
  templateUrl: './subscribe-two.component.html',
  styleUrls: ['./subscribe-two.component.scss'],
})
export class SubscribeTwoComponent {}
