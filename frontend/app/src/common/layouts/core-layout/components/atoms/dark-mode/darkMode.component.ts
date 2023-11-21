import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
@Component({
  standalone: true,
  selector: 'dark-mode',
  templateUrl: './darkMode.component.html',
  styleUrls: ['./darkMode.component.scss'],
})
export class DarkModeComponent implements OnInit {
  toggleDarkMode: boolean =
    this.document.documentElement.classList.value === 'dark';
  mode: string | null = localStorage.getItem('theme');

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  darkChange(): void {
    this.toggleDarkMode =
      this.document.documentElement.classList.toggle('dark');
    this.mode = this.toggleDarkMode
      ? (localStorage['theme'] = 'dark')
      : (localStorage['theme'] = 'light');
  }
}
