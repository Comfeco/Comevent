import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { TitleComponent } from '../../atoms';
import { IconClearComponent } from '../../atoms/icons';

@Component({
  standalone: true,
  selector: 'c-chip',
  imports: [CommonModule, IconClearComponent, TitleComponent],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {}
