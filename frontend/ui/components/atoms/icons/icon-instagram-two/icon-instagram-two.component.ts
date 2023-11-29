import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-instagram-two',
  imports: [CommonModule],
  templateUrl: './icon-instagram-two.component.html',
  styleUrls: ['./icon-instagram-two.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconInstagramTwoComponent {
  @Input() color!: string;
}
