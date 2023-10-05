import { Injectable, signal } from '@angular/core';
import { BaseResourceService } from '../../../../common';

@Injectable({
  providedIn: 'root',
})
export class RegisterUtilsService extends BaseResourceService<string> {
  step = signal<number>(1);
  areasSelected = signal<string[]>([]);

  insertToAreasSelected(item: string) {
    this.insertResource(item, this.areasSelected);
  }

  removeFromAreasSelected(area: string): void {
    this.removeResource(area, this.areasSelected);
  }
}
