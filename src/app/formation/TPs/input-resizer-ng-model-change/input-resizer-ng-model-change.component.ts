import {Component} from '@angular/core';

@Component({
  selector: 'app-input-resizer-ng-model-change',
  templateUrl: './input-resizer-ng-model-change.component.html',
  styleUrls: ['./input-resizer-ng-model-change.component.scss']
})
export class InputResizerNgModelChangeComponent {
  public height: number;
  public heightWithUnit: string;
  public width: number;
  public widthWithUnit: string;

  public currentUnit = 'px';
  public units = ['px', 'em'];

  public onWidthChange(width: number): void {
    this.width = width;
    this.widthWithUnit = width + this.currentUnit;
  }

  public onHeightChange(height: number): void {
    this.height = height;
    this.heightWithUnit = height + this.currentUnit;
  }

  public onUnitChange(): void {
    this.widthWithUnit = this.width + this.currentUnit;
    this.heightWithUnit = this.height + this.currentUnit;
  }
}
