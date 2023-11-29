import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormResetPassModule } from '../../components';

@Component({
  standalone: true,
  imports: [CommonModule, FormResetPassModule],
  selector: 'reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent {}
