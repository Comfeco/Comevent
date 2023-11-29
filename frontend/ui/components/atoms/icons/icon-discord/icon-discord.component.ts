import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'icon-discord',
  imports: [CommonModule],
  templateUrl: './icon-discord.component.html',
  styleUrls: ['./icon-discord.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDiscordComponent {
  @Input() color!: string;
}
