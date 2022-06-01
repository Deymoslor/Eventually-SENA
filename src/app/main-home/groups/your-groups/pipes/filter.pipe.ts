import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: string):any {
    if (arg === '' || arg === undefined) {
      return value;
    }
    return value.filter(persona => persona.Email.toLowerCase().indexOf(arg.toLowerCase()) != -1);
  }

}
