import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconEditComponent, IconViewComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, IconViewComponent, IconEditComponent],
  selector: 'c-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ButtonActionComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) title: string = '';
  @Input() buttonClass!: string;
}
