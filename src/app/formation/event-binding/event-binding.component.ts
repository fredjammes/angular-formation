import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  squareColor = 'red';
  switchColor(focusEvent?: FocusEvent): void {
    if (!focusEvent) {
      this.squareColor = 'black';
    } else {
      this.squareColor = (focusEvent.target as HTMLInputElement).value;
    }
  }
}
