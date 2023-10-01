import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { TitleComponent } from '../../atoms';
import { IconLoadingComponent } from '../../atoms/icons';
import { ButtonType } from './button.interface';

@Component({
  standalone: true,
  selector: 'c-button',
  imports: [CommonModule, TitleComponent, IconLoadingComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements ButtonType {
  @Input() type: ButtonType['type'] = 'button';
  @Input() disabled: ButtonType['disabled'] = false;
  @Input() button!: ButtonType['button'];
  @Input() loading = false;
  @Input() colorLoading: 'white' | 'disabled' = 'white';
}
