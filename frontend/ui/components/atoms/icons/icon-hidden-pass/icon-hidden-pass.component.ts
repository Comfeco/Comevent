import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-hidden-pass',
  imports: [CommonModule],
  templateUrl: './icon-hidden-pass.component.html',
  styleUrls: ['./icon-hidden-pass.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHiddenPassComponent {}
