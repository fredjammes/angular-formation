import { Pipe, PipeTransform } from '@angular/core';
import {Size} from '../formation/shared/trainee/size';

@Pipe({
  name: 'sizeLabel'
})
export class SizeLabelPipe implements PipeTransform {

  transform(size: Size, unit: string): string {
    return `w: ${size.width}${unit} x h: ${size.height}${unit}`;
  }

}
