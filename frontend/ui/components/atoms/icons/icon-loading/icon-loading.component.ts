import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { LoadingType } from '.';

@Component({
  standalone: true,
  selector: 'icon-loading',
  imports: [CommonModule],
  templateUrl: './icon-loading.component.html',
  styleUrls: ['./icon-loading.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLoadingComponent implements LoadingType {
  @Input() color: LoadingType['color'] = 'white';
}
