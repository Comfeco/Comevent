import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-show-pass',
  imports: [CommonModule],
  templateUrl: './icon-show-pass.component.html',
  styleUrls: ['./icon-show-pass.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShowPassComponent {}
