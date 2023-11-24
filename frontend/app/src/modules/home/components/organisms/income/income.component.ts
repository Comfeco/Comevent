import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent, TitleComponent } from '@ui/components';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, ButtonComponent],
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent {}
