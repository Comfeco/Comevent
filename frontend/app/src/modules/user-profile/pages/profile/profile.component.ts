import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, TitleComponent } from '@ui/components';
import { LoginStateService } from '../../../auth/service/state';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, TitleComponent],
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private loginService = inject(LoginStateService);

  public user = computed(() => this.loginService.currentUser());

  onLogout() {
    this.loginService.logout();
  }
}
