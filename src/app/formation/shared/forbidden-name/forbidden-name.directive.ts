import {forbiddenNameValidator} from './forbidden-name.validator';
import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!!this.forbiddenName) {
      const forbiddenNameRegExp = new RegExp(this.forbiddenName, 'i');
      const forbiddenNameValidatorFunction: ValidatorFn = forbiddenNameValidator(forbiddenNameRegExp);
      return forbiddenNameValidatorFunction(control);
    } else {
      return null;
    }
  }
}
