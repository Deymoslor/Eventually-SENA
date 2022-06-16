import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeTypeServices'
})
export class FilterPipeTypeServicesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
