import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-facebook-two',
  imports: [CommonModule],
  templateUrl: './icon-facebook-two.component.html',
  styleUrls: ['./icon-facebook-two.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFacebookTwoComponent {
  @Input() color!: string;
}
