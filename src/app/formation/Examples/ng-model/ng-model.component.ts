import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  typedText = '';
  isValue1Checked = false;
  isValue2Checked = true;
  isValue3Checked = false;

  options = [
    {id: 0, label: 'première option'},
    {id: 1, label: 'seconde option'},
    {id: 2, label: 'troisième option'},
  ];
  selectedId;
  selectedObject;

  showInConsole(): void {
    console.log(`
      typedText: ${this.typedText},
      isValue1Checked: ${this.isValue1Checked}
      isValue2Checked: ${this.isValue2Checked}
      isValue3Checked: ${this.isValue3Checked}
    `);
  }
}
