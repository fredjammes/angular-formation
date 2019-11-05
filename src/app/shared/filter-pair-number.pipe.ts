import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPairNumber'
})
export class FilterPairNumberPipe implements PipeTransform {

  transform(numbers: number[]): number[] {
    return numbers.filter((currentNumber: number) => currentNumber % 2 === 0);
  }
}
