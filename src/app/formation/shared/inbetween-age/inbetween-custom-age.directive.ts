import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {inbetweenCustomAgeValidator} from './inbetween-custom-age.validator';

@Directive({
  selector: '[appInbetweenCustomAge]',
  providers: [{provide: NG_VALIDATORS, useExisting: InbetweenCustomAgeDirective, multi: true}]
})
export class InbetweenCustomAgeDirective implements Validator {
  @Input() ageMin: number;
  @Input() ageMax: number;
  validate(control: AbstractControl): ValidationErrors | null {
    return inbetweenCustomAgeValidator(this.ageMin, this.ageMax)(control);
  }
}
