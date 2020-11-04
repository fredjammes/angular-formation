import { Component } from '@angular/core';

@Component({
  selector: 'app-interaction-localvar-presentation',
  templateUrl: './interaction-localvar-presentation.component.html',
  styleUrls: ['./interaction-localvar-presentation.component.scss']
})
export class InteractionLocalvarPresentationComponent {
  isSleeping = true;
  public wakeUp(): void {
    this.isSleeping = false;
  }
}
