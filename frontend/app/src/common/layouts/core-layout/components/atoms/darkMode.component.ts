import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
@Component({
  standalone: true,
  selector: 'dark-mode',
  template: `
    <div class="theme-switch bg-white-1 dark:bg-black-2" (click)="darkChange()">
      <!-- Main circle representing the visual toggle element (sun/moon) -->
      <div class="circle">
        <!-- Inner circle which changes position based on the theme -->
        <div
          class="inner-circle transform dark:translate-x-[8px] dark:translate-y-[0] translate-x-[38px] translate-y-[24px]"
        ></div>

        <svg
          class="star"
          style="--star-position: 2rem, 1rem; --star-size: 20px;"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path
            fill="#fff"
            stroke="none"
            d="M17.657 12.007a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29l1.377 1.337-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708-.895 1.708.896a1.388 1.388 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272l-.325-1.891 1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81l-1.907-.278-.853-1.722A1.393 1.393 0 0 0 17.8 12l-.143.007z"
          />
        </svg>

        <svg
          class="star"
          style="--star-position: 0rem, -2.2rem; --star-size: 90px; --star-delay: 200ms;"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path
            fill="#fff"
            stroke="none"
            d="M17.657 12.007a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29l1.377 1.337-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708-.895 1.708.896a1.388 1.388 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272l-.325-1.891 1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81l-1.907-.278-.853-1.722A1.393 1.393 0 0 0 17.8 12l-.143.007z"
          />
        </svg>
      </div>

      <!-- Dot elements positioned around the main circle, serving as sun rays or stars -->
      <div class="dot" style="--angle: 0deg;"></div>
      <div class="dot" style="--angle: 45deg;"></div>
      <div class="dot" style="--angle: 90deg;"></div>
      <div class="dot" style="--angle: 135deg;"></div>
      <div class="dot" style="--angle: 180deg;"></div>
      <div class="dot" style="--angle: 225deg;"></div>
      <div class="dot" style="--angle: 270deg;"></div>
      <div class="dot" style="--angle: 315deg;"></div>
    </div>
    <!-- <img
				class="h-8 w-auto"
				[src]="mode === 'dark' ? moon : sun"
				[alt]="mode === 'dark' ? 'icon-moon' : 'icon-soon'"
			/> -->
  `,
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
