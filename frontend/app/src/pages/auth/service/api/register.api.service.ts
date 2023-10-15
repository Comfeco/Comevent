import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, of, switchMap, tap } from 'rxjs';
import { BaseResponse } from '../../../../common';
import { environment } from '../../../../environments/environment';
import { RegisterAdapter } from '../../adapters';
import { IClaimsInfo, IRegisterData, ITokenResponse, IUser } from '../../types';
import { decodeAndGetPayload } from '../utils/jwtUtils';

@Injectable({
  providedIn: 'root',
})
export class RegisterApiService {
  private http = inject(HttpClient);
  private router = inject(Router);
  BASE_API: string = environment.baseUrl;
  private _token!: string | undefined;
  private _claimsInfo!: IClaimsInfo | null;
  private _tokenExpiration!: Date;
  private _onLoginStatusChanged: Subject<boolean> = new Subject<boolean>();
  public onLoginStatusChanged: Observable<boolean> =
    this._onLoginStatusChanged.asObservable();

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

  get token(): string | undefined {
    if (!this._token) {
      const token = localStorage.getItem('access_token');
      if (token) this._token = token;
    }
    return this._token;
  }

  set token(value: string | undefined) {
    this._token = value;
    if (value) {
      localStorage.setItem('access_token', value);
    } else {
      localStorage.removeItem('access_token');
    }
  }

  get claimsInfo(): IClaimsInfo | null {
    if (!this._claimsInfo) {
      this.tryDecodeTokenClaims();
    }

    return this._claimsInfo;
  }

  set claimsInfo(value: IClaimsInfo | null) {
    this._claimsInfo = value;
  }

  get tokenExpiration(): Date {
    if (!this._tokenExpiration) {
      const expiration = localStorage.getItem('access_token_expiration');
      if (expiration) {
        this._tokenExpiration = new Date(expiration);
      }
    }
    return this._tokenExpiration;
  }

  set tokenExpiration(value: Date) {
    localStorage.setItem('access_token_expiration', value.toString());
    this._tokenExpiration = value;
  }

  private interceptAuthResponse(
    request: Observable<ITokenResponse>
  ): Observable<ITokenResponse> {
    return request.pipe(
      tap((r) => {
        this.proccessTokenResponse(r);
        this.router.navigate(['/profile/user-profile']);
      })
    );
  }

  private proccessTokenResponse(tokenResponse: ITokenResponse) {
    if (tokenResponse) {
      this._onLoginStatusChanged.next(true);
      this.token = tokenResponse.token;
      this.tryDecodeTokenClaims();
    }
  }

  private tryDecodeTokenClaims() {
    const token = this.token;
    if (token) {
      const payload = decodeAndGetPayload(token);
      const expiration = Number.parseInt(
        payload[environment.claimTypes.tokenExpiration]
      );
      if (!expiration) {
        return;
      }
      this.tokenExpiration = new Date(expiration * 1000);

      this.claimsInfo = {
        id: payload[environment.claimTypes.userIdClaimType],
        username: payload[environment.claimTypes.userName],
        email: payload[environment.claimTypes.email],
      };
    }
  }

  public claimToken(token: string, id: string, provider: string) {
    const codeVerifier = localStorage.getItem('code_verifier');

    return this.interceptAuthResponse(
      this.http.post<ITokenResponse>(
        `${this.BASE_API}/auth/token`,
        {
          token,
          id,
          provider,
          codeVerifier,
        },
        {
          withCredentials: true,
        }
      )
    );
  }
}
