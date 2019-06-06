import { Component } from '@angular/core';

@Component({
  selector: 'app-input-resizer3',
  templateUrl: './input-resizer3.component.html',
  styleUrls: ['./input-resizer3.component.scss']
})
export class InputResizer3Component {
  public height: number;
  public width: number;

  public resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }
}
