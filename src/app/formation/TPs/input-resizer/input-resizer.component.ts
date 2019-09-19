import { Component } from '@angular/core';

@Component({
  selector: 'app-input-resizer',
  templateUrl: './input-resizer.component.html',
  styleUrls: ['./input-resizer.component.scss']
})
export class InputResizerComponent {
  private _height: number;
  public width: number;

  public get height() {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
  }

  public setWidth(focusEvent: Event) {
    this.width = Number((focusEvent.target as HTMLInputElement).value);
  }
}
