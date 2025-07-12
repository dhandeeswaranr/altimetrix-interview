import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalize',
  standalone: false
})
export class ConverterPipe implements PipeTransform {


  transform(value: any, ...args: unknown[]): unknown {
    
    return value.toUpperCase();

  }

}
