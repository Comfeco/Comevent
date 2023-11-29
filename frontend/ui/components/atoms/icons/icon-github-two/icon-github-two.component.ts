import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-github-two',
  imports: [CommonModule],
  templateUrl: './icon-github-two.component.html',
  styleUrls: ['./icon-github-two.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGithubTwoComponent {
  @Input() color!: string;
}
