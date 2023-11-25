import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'button-header-profile',
  templateUrl: './button-header-profile.component.html',
  styleUrls: ['./button-header-profile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ButtonHeaderProfileComponent {
  route = inject(Router);

  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) link: string = '';
}
