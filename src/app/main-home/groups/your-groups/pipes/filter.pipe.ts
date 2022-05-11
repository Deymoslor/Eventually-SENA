import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length) return value;
    const resultPersonas = [];
    for (const persona of value) {
      if (persona.Email.toLowerCase().indexOf(arg.toLoweCase()) > -1) {
        console.log('si');
        // resultPersonas.push(filterPersona);
      }

    }
    // return resultPersonas;
  }

}
