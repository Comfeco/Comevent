import { Component, Input, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAreaOfInterest } from '../../..';
import { FormUtilitiesService } from '../../../../../utils';
import { RegisterUtilsService } from '../../../service/utils';

@Component({
  selector: 'register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.scss'],
})
export class FormRegisterStepThreeComponent {
  @Input({ required: true }) parentForm!: FormGroup;

  protected formUtilities = inject(FormUtilitiesService);
  registerUtils = inject(RegisterUtilsService);

  areas: IAreaOfInterest[] = [
    {
      id: 1,
      name: 'Programación',
    },
    {
      id: 2,
      name: 'Animación 3D',
    },
    {
      id: 3,
      name: 'Videojuegos',
    },
    {
      id: 4,
      name: 'Ilustración',
    },
  ];
  allAreasNames: string[] = this.areas.map((area) => area.name);
  availableAreasNames: string[] = [...this.allAreasNames];

  get stepThreeForm(): FormGroup {
    return this.parentForm.get('stepThree') as FormGroup;
  }

  onAreaSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    this.registerUtils.insertToAreasSelected(selectedValue);

    // Remove selected area from available options
    const index = this.availableAreasNames.indexOf(selectedValue);
    if (index > -1) {
      this.availableAreasNames.splice(index, 1);
    }

    /* this.stepThreeForm.controls['areaOfInterest'].setValue(null);
    this.stepThreeForm.controls['areaOfInterest'].updateValueAndValidity();
    console.log(this.stepThreeForm?.get('areaOfInterest')?.errors); */
  }
}
