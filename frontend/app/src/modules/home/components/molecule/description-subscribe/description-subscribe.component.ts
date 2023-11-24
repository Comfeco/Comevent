import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, TranslateModule],
  selector: 'description-subscribe',
  templateUrl: './description-subscribe.component.html',
  styleUrls: ['./description-subscribe.component.scss'],
})
export class DescriptionSubscribeComponent {}
