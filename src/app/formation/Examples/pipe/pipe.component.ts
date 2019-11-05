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
  objetComplexe = {
    nom: 'truc',
    prenom: 'chose',
    age: 32
  };
  pairNumbers: number[] = [0, 1, 2, 3, 4, 5];
}
