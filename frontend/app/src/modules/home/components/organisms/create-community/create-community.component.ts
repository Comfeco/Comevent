import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent, TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, TitleComponent],
  selector: 'create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.scss'],
})
export class CreateCommunityComponent {}
