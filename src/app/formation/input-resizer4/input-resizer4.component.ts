import {Component} from '@angular/core';

@Component({
  selector: 'app-input-resizer4',
  templateUrl: './input-resizer4.component.html',
  styleUrls: ['./input-resizer4.component.scss']
})
export class InputResizer4Component {

  public height: number;
  public width: number;
  public sizes: { id: number, width: number, height: number }[] = [
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

  public resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  public chooseSize(event: Event) {
    this.width = this.sizes[(event.target as HTMLSelectElement).value].width;
    this.height = this.sizes[(event.target as HTMLSelectElement).value].height;
  }

}
