import { Injectable } from '@angular/core';
import { IJwtPayload } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserIdFromToken(): string | null {
    const token = this.getToken();
    if (!token) return null;

    // Suponiendo que usas un token JWT
    const payload: IJwtPayload = JSON.parse(atob(token.split('.')[1]));

    console.log(payload);

    return payload.id;
  }
}
