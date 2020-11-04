import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function forbiddenNameValidator(nameRegExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isForbidden = nameRegExp.test(control.value);
    return isForbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
