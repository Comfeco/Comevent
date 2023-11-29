import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonComponent, TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, ButtonComponent],
  selector: 'card-without-events',
  templateUrl: './card-without-events.component.html',
  styleUrls: ['./card-without-events.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardWithoutEventsComponent {}
