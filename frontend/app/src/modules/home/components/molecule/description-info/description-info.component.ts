import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent, TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, TitleComponent],
  selector: 'description-info',
  templateUrl: './description-info.component.html',
  styleUrls: ['./description-info.component.scss'],
})
export class DescriptionInfoComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
}
