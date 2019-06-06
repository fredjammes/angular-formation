import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  maVariable = 'Super text';
  start = 2;
  length = 4;
  maDate = new Date();
  objetComplexe = {
    nom: 'truc',
    prenom: 'chose',
    age: 32
  };
}
