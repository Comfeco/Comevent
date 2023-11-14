import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IAreaOfInterest } from '../../pages/auth/types';

@Pipe({
  name: 'translateAreas',
})
export class TranslateAreasPipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(areas: IAreaOfInterest[]): string[] {
    return areas.map((area) => {
      const translationKey = `register.areas.${area.key}`;
      return this.translate.instant(translationKey);
    });
  }
}
