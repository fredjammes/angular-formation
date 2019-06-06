import { Pipe, PipeTransform } from '@angular/core';
import {Size} from '../formation/TPs/input-resizer5/input-resizer5.component';

@Pipe({
  name: 'sizeLabel'
})
export class SizeLabelPipe implements PipeTransform {

  transform(size: Size, unit: string): string {
    return `w: ${size.width}${unit} x h: ${size.height}${unit}`;
  }

}
