import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  ButtonComponent,
  IconComeventComponent,
  TitleComponent,
} from '@ui/components';
import { supportLanguages } from '../../../../../../utils';
import { DarkModeComponent } from '../../atoms/darkMode.component';

@Component({
  standalone: true,
  selector: 'c-nav',
  imports: [
    CommonModule,
    IconComeventComponent,
    TitleComponent,
    RouterModule,
    ButtonComponent,
    TranslateModule,
    DarkModeComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavComponent {
  @ViewChild('select') select!: ElementRef;
  @ViewChild('options') options!: ElementRef;
  @ViewChild('contentSelect') contentSelect!: ElementRef;
  @ViewChild('inputSelect') inputSelect!: ElementRef;

  private renderer2 = inject(Renderer2);
  private translateService = inject(TranslateService);

  langs: string[] = supportLanguages;
  clickCount = 1;
  clickCountTwo = 1;
  clickCountThree = 1;

  lang = [
    {
      languaje: 'en',
      img: './../../../../../../assets/svg/icon-en.svg',
      description: 'icon flag USA',
    },
    {
      languaje: 'es',
      img: './../../../../../../assets/svg/icon-es.svg',
      description: 'icon flag Spain',
    },
  ];

  selectLang(lang: string) {
    this.translateService.use(lang);
  }

  reciveData(e: any) {
    e.preventDefault();
    const contentSelect = this.contentSelect.nativeElement;
    contentSelect.innerHTML = e.currentTarget.innerHTML;

    const inputSelect = this.inputSelect.nativeElement;
    inputSelect.value = e.currentTarget.querySelector('.title-lang').innerText;
  }

  @HostListener('document:click', ['$event'])
  outClickHandler(e: MouseEvent) {
    const options = this.options.nativeElement;
    const navBarSelect = this.select.nativeElement;

    const clic = e.target;
    if (options.contains(clic) && this.clickCountTwo === 1) {
      options.style.display = 'flex';
      this.clickCountTwo += 1;

      if (this.clickCountTwo === 2) {
        options.style.display = 'none';
        this.renderer2.removeClass(navBarSelect, 'active');
        this.renderer2.removeClass(options, 'active');
        this.clickCountTwo = 1;
        this.clickCount = 1;
      }
    } else if (navBarSelect.contains(clic) && this.clickCount == 1) {
      options.style.display = 'flex';
      this.renderer2.addClass(navBarSelect, 'active');
      this.renderer2.addClass(options, 'active');
      this.renderer2.addClass(options, 'flex-column');

      this.clickCount += 1;
    } else if (navBarSelect.contains(clic) && this.clickCount == 2) {
      const select = this.select.nativeElement;
      this.renderer2.removeClass(select, 'active');
      const options = this.options.nativeElement;
      this.renderer2.removeClass(options, 'active');
      options.style.display = 'none';

      this.clickCount = 1;
    } else {
      options.style.display = 'none';
      this.renderer2.removeClass(navBarSelect, 'active');
      this.renderer2.removeClass(options, 'active');
      this.clickCount = 1;
    }
  }
}
