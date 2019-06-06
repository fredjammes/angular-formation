import {Component} from '@angular/core';
import {Size} from '../input-resizer5/input-resizer5.component';

@Component({
  selector: 'app-input-resizer7',
  templateUrl: './input-resizer7.component.html',
  styleUrls: ['./input-resizer7.component.scss']
})
export class InputResizer7Component {
  public dateDuJour: Date = new Date();
  public currentSizeChoiceIndex: number;
  public currentSizeChoice: Size;
  public height: number;
  public heightWithUnit: string;
  public width: number;
  public widthWithUnit: string;
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

  private unit = 'px';

  public chooseSizeByIndex(sizeIndex: number) {
    this.onWidthChange(this.sizes[sizeIndex].width);
    this.onHeightChange(this.sizes[sizeIndex].height);
  }

  public chooseSize(size: Size) {
    this.onWidthChange(size.width);
    this.onHeightChange(size.height);
  }

  public onWidthChange(width: number): void {
    this.width = width;
    this.widthWithUnit = width + this.unit;
  }

  public onHeightChange(height): void {
    this.height = height;
    this.heightWithUnit = height + this.unit;
  }
}
