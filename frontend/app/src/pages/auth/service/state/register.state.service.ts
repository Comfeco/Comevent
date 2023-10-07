import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Swal } from '@utils';
import { take } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IRegisterData } from '../../types';
import { RegisterApiService } from '../api';
import { RegisterUtilsService } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class RegisterStateService {
  registerUtils = inject(RegisterUtilsService);
  registerService = inject(RegisterApiService);
  router = inject(Router);
  BASE_API: string = environment.baseUrl;

  onRegister(form: IRegisterData): void {
    this.registerService
      .registerUser(form)
      .pipe(take(1))
      .subscribe({
        next: ({ data, response }) => {
          this.registerUtils.step.set(1);
          this.registerUtils.areasSelected.set([]);
          this.registerUtils.formRegister.reset();
          this.router.navigateByUrl('auth/login');
          Swal.success(response.message, true);
        },
        error: ({ response }) => {
          Swal.error(response.message);
        },
      });
  }
}
