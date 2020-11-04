import { Component, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {forbiddenNameValidator} from '../../shared/forbidden-name/forbidden-name.validator';
import {inbetweenCustomAgeValidator} from '../../shared/inbetween-age/inbetween-custom-age.validator';
import {inbetweenAgeValidator} from '../../shared/inbetween-age/inbetween-age.validator';

@Component({
  selector: 'app-reactive-form-formbuilder',
  templateUrl: './reactive-form-formbuilder.component.html',
  styleUrls: ['./reactive-form-formbuilder.component.scss']
})
export class ReactiveFormFormbuilderComponent {
  myForm: FormGroup = this.formBuilder.group({
    name: ['', [
      Validators.required,
      forbiddenNameValidator(/bob/i)
    ]],
    firstname: ['', Validators.required],
    age: ['', [Validators.pattern('[0-9]*'), Validators.required, inbetweenCustomAgeValidator(3, 80)]],
    ageEZ: ['', [Validators.pattern('[0-9]*'), Validators.required, inbetweenAgeValidator]],
    email: ['', [Validators.email, Validators.required]]
  });
  a: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  public get name() {
    return this.myForm.get('name');
  }
  public get firstname() {
    return this.myForm.get('firstname');
  }
  public get age() {
    return this.myForm.get('age');
  }
  public get email() {
    return this.myForm.get('email');
  }
  send() {
  }
}
