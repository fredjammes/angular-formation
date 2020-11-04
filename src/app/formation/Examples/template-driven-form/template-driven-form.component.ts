import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  name: string;
  firstname: string;
  age: number;
  email: string;
  fingerNumber: number;

  send(form: NgForm) {
    console.log(`
      Nom: ${this.name}
      Prénom: ${this.firstname}
      Age: ${this.age}
      Email: ${this.email}
    `);
  }
}
