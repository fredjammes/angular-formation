import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    firstname: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

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
