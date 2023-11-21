import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavComponent } from '../../organisms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  selector: 'comevent-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LayoutRootComponent {
  constructor(public route: Router) {}
}
