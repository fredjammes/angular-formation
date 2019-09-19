import {Component} from '@angular/core';

@Component({
  selector: 'app-input-resizer4',
  templateUrl: './input-resizer4.component.html',
  styleUrls: ['./input-resizer4.component.scss']
})
export class InputResizer4Component {

  public height: number;
  public width: number;
  public isBigEnough: boolean;
  public sizes: { id: number, width: number, height: number }[] = [
    {
      id: 129,
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

  public resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.isBigEnough = this.width > 50 && this.height > 50;
  }

  public chooseSizeById(currentSizeId: number) {
      const currentSize = this.sizes.find(size => size.id === Number(currentSizeId));
      this.resize(currentSize.width, currentSize.height);
  }
  public chooseSizeByIndex(index: number) {
    this.resize(this.sizes[index].width, this.sizes[index].height);
  }

}
