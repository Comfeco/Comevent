import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  IconDiscordComponent,
  IconFacebookTwoComponent,
  IconGithubTwoComponent,
  IconInstagramTwoComponent,
  IconLinkedinTwoComponent,
  IconXComponent,
  TitleComponent,
} from '@ui/components';
import { IUserProfile } from '../../../types';
import { ButtonActionComponent } from '../../molecules';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ButtonActionComponent,
    TitleComponent,
    IconFacebookTwoComponent,
    IconInstagramTwoComponent,
    IconDiscordComponent,
    IconLinkedinTwoComponent,
    IconGithubTwoComponent,
    IconXComponent,
  ],
  selector: 'card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardProfileComponent {
  @Input({ required: true }) dataProfile!: IUserProfile;
}
