import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function inbetweenAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return 7 < control.value && control.value > 77 ? { inbetweenAge: true } : null;
  };
}
