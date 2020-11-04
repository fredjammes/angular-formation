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

  public setWidth(event: Event) {
    this.width = (event.target as HTMLInputElement).valueAsNumber;
  }
}
