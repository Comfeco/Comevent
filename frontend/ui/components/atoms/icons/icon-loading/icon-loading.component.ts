import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-loading',
  imports: [CommonModule],
  templateUrl: './icon-loading.component.html',
  styleUrls: ['./icon-loading.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLoadingComponent {}
