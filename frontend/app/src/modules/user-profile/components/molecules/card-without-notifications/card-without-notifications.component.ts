import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, TranslateModule],
  selector: 'card-without-notifications',
  templateUrl: './card-without-notifications.component.html',
  styleUrls: ['./card-without-notifications.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardWithoutNotificationsComponent {}
