import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ChipType } from '.';
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
export class ChipComponent implements ChipType {
  public isHovered = false;
  @Input() text: ChipType['text'] = 'body-medium';
  @Input() colorText: ChipType['colorText'] = 'black';
  @Input() colorIcon: ChipType['colorIcon'] = 'error';
  @Input() type: ChipType['type'] = 'outlined';

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
