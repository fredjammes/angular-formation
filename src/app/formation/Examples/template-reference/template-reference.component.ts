import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.scss']
})
export class TemplateReferenceComponent {
  changeInputPlaceholder(element: HTMLInputElement): void {
    element.placeholder = 'My new placeholder';
  }
}
