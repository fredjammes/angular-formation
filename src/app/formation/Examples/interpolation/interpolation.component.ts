import { Component } from '@angular/core';

@Component({
  templateUrl: './interpolation.component.html'
})
export class InterpolationComponent  {

  message = 'Bienvenue';
  user = {
    name: 'Gérard'
  };
  undefinedObject;
}
