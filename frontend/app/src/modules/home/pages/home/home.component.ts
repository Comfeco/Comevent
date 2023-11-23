import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateCommunityComponent, EventsComponent } from '../../components';

@Component({
  standalone: true,
  imports: [CommonModule, CreateCommunityComponent, EventsComponent],
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'frontend-app';
}
