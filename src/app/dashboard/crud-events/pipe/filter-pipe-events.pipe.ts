import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeEvents'
})
export class FilterPipeEventsPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(evento =>evento.nombreEvento.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
