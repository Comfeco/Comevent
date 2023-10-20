import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, WritableSignal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { AuthProvider } from '../../../../../../../backend/database/src/constants/interfaces.entities';
import { BaseResponse } from '../../../../common';
import { environment } from '../../../../environments/environment';
import { makeRandomValue } from '../../../../utils';
import { LoginAdapter, RevalidateAdapter } from '../../adapters';
import {
  ILogin,
  ILoginData,
  IRevalidateTokenResponse,
  IUser,
} from '../../types';
import { RegisterUtilsService } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private registerUtils = inject(RegisterUtilsService);
  private http = inject(HttpClient);
  router = inject(Router);
  BASE_API: string = environment.baseUrl;

  loginUser({
    email,
    password,
  }: ILoginData): Observable<BaseResponse<ILogin | undefined>> {
    const body = { email, password };

    return this.http
      .post<BaseResponse<IUser | undefined>>(
        `${this.BASE_API}/auth/login`,
        body
      )
      .pipe(
        switchMap((res) => of(LoginAdapter(res))),
        catchError(({ error }) => {
          throw error;
        })
      );
  }

  checkAuthStatus(): Observable<
    BaseResponse<IRevalidateTokenResponse | undefined>
  > {
    const token = localStorage.getItem('token');

    if (this.router.url.includes('/auth/reset-password')) {
      return of({
        data: {},
        response: {
          status: 202,
          code: 'ACCEPTED',
          success: true,
          message: 'Resetting Password',
        },
      });
    }

    if (!token) {
      return throwError(() => new Error('Token not found'));
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http
      .get<BaseResponse<IUser | undefined>>(
        `${this.BASE_API}/auth/revalidate`,
        { headers }
      )
      .pipe(
        switchMap((res) => of(RevalidateAdapter(res))),
        catchError(({ error }) => {
          throw error;
        })
      );
  }

  loginWithProvider(provider: AuthProvider) {
    console.log(provider);

    const loadingStates: { [key in AuthProvider]?: WritableSignal<boolean> } = {
      [AuthProvider.GOOGLE]: this.registerUtils.isLoadingProviderGoogle,
      [AuthProvider.FACEBOOK]: this.registerUtils.isLoadingProviderFacebook,
    };

    if (loadingStates[provider]) {
      loadingStates[provider]?.set(true);
    }

    const codeVerifier = makeRandomValue(10);
    localStorage.setItem('code_verifier', codeVerifier);
    location.href = `${this.BASE_API}/auth/${provider}?redirect_url=${encodeURI(
      'http://' + location.host + '/auth/identity-providers-callback'
    )}&code_challenge=${encodeURI(codeVerifier)}`;
  }
}
