import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-resizer2',
  templateUrl: './input-resizer2.component.html',
  styleUrls: ['./input-resizer2.component.scss']
})
export class InputResizer2Component {
  public height: number;
  public width: number;

  public resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }
}
