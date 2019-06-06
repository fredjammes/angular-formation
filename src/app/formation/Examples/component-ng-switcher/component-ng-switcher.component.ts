import { Component } from '@angular/core';

@Component({
  selector: 'app-component-ng-switcher',
  templateUrl: './component-ng-switcher.component.html',
  styleUrls: ['./component-ng-switcher.component.scss']
})
export class ComponentNgSwitcherComponent {
  public components: string[] = ['ng-if', 'ng-for', 'ng-switch'];
  public currentComponent: string = this.components[0];
}
