import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterStateService } from '../../../service/state/register.state.service';

@Component({
  selector: 'register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.scss'],
})
export class FormRegisterStepOneComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterStateService);

  formRegisterStepOne!: FormGroup;

  ngOnInit(): void {
    this.formRegisterStepOne = this.formBuilder.group({
      nick: [''],
      email: [''],
    });
  }

  onRegister() {
    if (!this.formRegisterStepOne.valid) return;

    this.registerService.onRegister(this.formRegisterStepOne);
  }
}
