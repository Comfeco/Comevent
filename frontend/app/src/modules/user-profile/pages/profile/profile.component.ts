import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, TitleComponent } from '@ui/components';
import {
  CardProfileComponent,
  CardWithoutNotificationsComponent,
  UserProfileStateService,
} from '../..';
import { TokenService } from '../../../../common/services/token.service';
import { ILogin } from '../../../auth';
import { LoginStateService } from '../../../auth/service/state';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TitleComponent,
    CardProfileComponent,
    CardWithoutNotificationsComponent,
  ],
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private loginService = inject(LoginStateService);
  private tokenService = inject(TokenService);
  public userProfileStateService = inject(UserProfileStateService);
  public userData = computed(() => this.loginService.currentUser());
  public user: ILogin | null = null;

  onLogout() {
    this.loginService.logout();
  }

  ngOnInit(): void {
    const userId = this.tokenService.getUserIdFromToken();

    if (userId) {
      this.userProfileStateService.onDataUserProfile(userId);
    } else {
      console.log('No entro');
    }
  }
}
