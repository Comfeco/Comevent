import { Component, Input, OnDestroy, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IAreaOfInterest } from '../../..';
import { FormUtilitiesService } from '../../../../../utils';
import { RegisterUtilsService } from '../../../service/utils';

@Component({
  selector: 'register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.scss'],
})
export class FormRegisterStepThreeComponent implements OnDestroy {
  @Input({ required: true }) parentForm!: FormGroup;

  selectedAreas: IAreaOfInterest[] = [];
  availableAreasNames!: string[];
  private langChangeSubscription: Subscription;

  constructor(private translate: TranslateService) {
    this.updateAreaNames();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.updateAreaNames(true);
    });
  }

  protected formUtilities = inject(FormUtilitiesService);
  registerUtils = inject(RegisterUtilsService);

  areas: IAreaOfInterest[] = [
    {
      id: 1,
      name: 'Programación',
      key: 'selectOptionTwo',
    },
    {
      id: 2,
      name: 'Animación 3D',
      key: 'selectOptionThree',
    },
    {
      id: 3,
      name: 'Videojuegos',
      key: 'selectOptionFour',
    },
    {
      id: 4,
      name: 'Ilustración',
      key: 'selectOptionFive',
    },
  ];
  allAreasNames: string[] = this.areas.map((area) => area.name);

  updateAreaNames(isLanguageChange = false) {
    // Traduce todas las áreas primero
    const translatedAllAreas = this.areas.map((area) => ({
      ...area,
      name: this.translate.instant(`register.areas.${area.key}`),
    }));

    if (isLanguageChange) {
      // Traduce las áreas que ya están seleccionadas
      this.selectedAreas = this.selectedAreas.map((area) => ({
        ...area,
        name: this.translate.instant(`register.areas.${area.key}`),
      }));
    }

    // Filtra solo las áreas que no han sido seleccionadas para las opciones disponibles
    this.availableAreasNames = translatedAllAreas
      .filter(
        (translatedArea) =>
          !this.selectedAreas.some((sel) => sel.id === translatedArea.id)
      )
      .map((area) => area.name);
  }

  get stepThreeForm(): FormGroup {
    return this.parentForm.get('stepThree') as FormGroup;
  }

  onAreaSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    const selectedArea = this.areas.find(
      (area) =>
        this.translate.instant(`register.areas.${area.key}`) === selectedValue
    );
    if (selectedArea) {
      //? Añade la opción seleccionada a la lista de áreas seleccionadas
      this.selectedAreas.push(selectedArea);

      //? Inserta la opción seleccionada usando registerUtils
      this.registerUtils.insertToAreasSelected(selectedValue);

      // ? Remove selected area from available options
      const index = this.availableAreasNames.indexOf(selectedValue);
      if (index > -1) {
        this.availableAreasNames.splice(index, 1);
      }
    }

    //? Actualiza los controles del formulario
    this.stepThreeForm.controls['actualAreaOfInterest'].setValue(selectedValue);
    this.stepThreeForm.controls['areaOfInterest'].setValue(null);
  }

  removeSelectedArea(area: string): void {
    const areaToRemove = this.areas.find(
      (a) => this.translate.instant(`register.areas.${a.key}`) === area
    );
    if (areaToRemove) {
      const index = this.selectedAreas.indexOf(areaToRemove);
      if (index > -1) {
        this.selectedAreas.splice(index, 1);
      }
    }

    // ? Add the area back to the available options
    this.availableAreasNames.push(area);

    // ? Remove area from selected areas
    this.registerUtils.removeFromAreasSelected(area);
  }

  ngOnDestroy() {
    this.langChangeSubscription.unsubscribe();
  }
}
