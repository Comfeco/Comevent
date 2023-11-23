import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRecoverModule } from '../../components';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormRecoverModule],
  selector: 'recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent {}
