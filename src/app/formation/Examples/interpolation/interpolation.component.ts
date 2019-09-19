import { Component } from '@angular/core';

@Component({
  selector: 'interpolation-comp',
  templateUrl: './interpolation.component.html'
})
export class InterpolationComponent  {

  message = 'Bienvenue';
  user = {
    name: 'Gérard'
  };
  undefinedObject;
}
