import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { BaseResponse } from '../../../../common';
import { environment } from '../../../../environments/environment';
import { RegisterAdapter } from '../../adapters';
import { IRegisterData, IUser } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class RegisterApiService {
  private http = inject(HttpClient);
  BASE_API: string = environment.baseUrl;

  registerUser(
    registerData: IRegisterData
  ): Observable<BaseResponse<IRegisterData | undefined>> {
    return this.http
      .post<BaseResponse<IUser | undefined>>(
        `${this.BASE_API}/user/register`,
        registerData
      )
      .pipe(
        switchMap((res) => of(RegisterAdapter(res))),
        catchError(({ error }) => {
          throw error;
        })
      );
  }
}
