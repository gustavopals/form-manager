import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private poNotification: PoNotificationService,
  ) { }

  formErrorHandler(form: FormGroup): void {
    this.poNotification.warning('Invalid form');
    const formControls: any = form.controls;
    for (const formControlName in formControls) {
      const formControl = formControls[formControlName];
      if (formControl.invalid) {
        formControl.markAsDirty();
        formControl.markAsTouched();
        formControl.updateValueAndValidity();
        this.poNotification.warning(`Error: ${formControlName} is invalid`);
      }
    }
  }

  getRandomInt(min: number = 1000000, max: number = 9999999): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
