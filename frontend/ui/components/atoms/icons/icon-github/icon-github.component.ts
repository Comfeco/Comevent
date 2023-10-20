import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-github',
  imports: [CommonModule],
  templateUrl: './icon-github.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGithubComponent {}
