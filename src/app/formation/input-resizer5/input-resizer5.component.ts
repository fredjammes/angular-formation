import { Component } from '@angular/core';

export interface Size {
  id: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-input-resizer5',
  templateUrl: './input-resizer5.component.html',
  styleUrls: ['./input-resizer5.component.scss']
})
export class InputResizer5Component {
  public currentSizeChoiceIndex: number;
  public currentSizeChoice: Size;
  public height: number;
  public width: number;
  public sizes: Size[] = [
    {
      id: 0,
      width: 100,
      height: 100
    },
    {
      id: 1,
      width: 150,
      height: 150
    },
    {
      id: 2,
      width: 200,
      height: 200
    }
  ];

  public chooseSizeByIndex(sizeIndex: number) {
    this.width = this.sizes[sizeIndex].width;
    this.height = this.sizes[sizeIndex].height;
  }
  public chooseSize(size: Size) {
    this.width = size.width;
    this.height = size.height;
  }
}
