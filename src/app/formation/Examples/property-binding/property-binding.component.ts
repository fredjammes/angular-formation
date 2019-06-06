import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  inputPlaceholder = 'Type an awesome text here';
  isDisabled = true;
  isSquareRed = true;
  isSquare = true;
}
