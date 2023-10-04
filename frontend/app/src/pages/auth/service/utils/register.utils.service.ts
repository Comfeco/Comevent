import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterUtilsService {
  step = signal<number>(1);
}
