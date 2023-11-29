import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Swal } from '@utils';
import { take } from 'rxjs';
import { IUserProfile } from '../..';
import { environment } from '../../../../environments/environment';
import { UserProfileApiService } from '../api';

@Injectable({
  providedIn: 'root',
})
export class UserProfileStateService {
  userProfileService = inject(UserProfileApiService);
  router = inject(Router);

  BASE_API: string = environment.baseUrl;
  private _dataUserProfile = signal<IUserProfile>({});
  public dataUserProfile = computed(() => this._dataUserProfile());

  onDataUserProfile(id: string): void {
    console.log('entro a onDataUserProfile', id);

    this.userProfileService
      .dataUser(id)
      .pipe(take(1))
      .subscribe({
        next: ({ data }) => {
          console.log('data', data);

          this._dataUserProfile.set(data as IUserProfile);
        },
        error: ({ response }) => {
          Swal.error(response.message);
        },
      });
  }
}
