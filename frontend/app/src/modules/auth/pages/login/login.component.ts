import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginModule } from '../../components';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormLoginModule],
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'frontend-app';
}
