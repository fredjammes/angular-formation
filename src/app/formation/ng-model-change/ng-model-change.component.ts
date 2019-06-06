import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model-change',
  templateUrl: './ng-model-change.component.html',
  styleUrls: ['./ng-model-change.component.scss']
})
export class NgModelChangeComponent {
  typedText = '';
  transformedText = '';
  transformText(textFromInput: string) {
    // Si on ne remet pas textFromInput dans this.typedText, alors, typedText ne change jamais !
    // Penser à refaire l'assignation suivante si nécessaire
    // this.typedText = textFromInput;
    this.transformedText = textFromInput.padStart(25, '*').padEnd(50, '*');
  }
}
