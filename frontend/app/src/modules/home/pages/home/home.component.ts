import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoComponent } from '../..';
import {
  CharacteristicsComponent,
  CreateCommunityComponent,
  EventsComponent,
  SubscribeComponent,
} from '../../components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CreateCommunityComponent,
    EventsComponent,
    SubscribeComponent,
    CharacteristicsComponent,
    InfoComponent,
  ],
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'frontend-app';
}
