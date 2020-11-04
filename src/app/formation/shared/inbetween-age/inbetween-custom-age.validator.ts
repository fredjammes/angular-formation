import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function inbetweenCustomAgeValidator(ageMin: number, ageMax: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return ageMin > control.value || ageMax < control.value ? { inbetween: true } : null;
  };
}
