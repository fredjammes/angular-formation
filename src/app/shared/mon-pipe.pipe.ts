import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monPipe'
})
export class MonPipePipe implements PipeTransform {
  transform(entree: string, beginIndex: number, length: number): string {
    return entree.substr(beginIndex, length);
  }
}
