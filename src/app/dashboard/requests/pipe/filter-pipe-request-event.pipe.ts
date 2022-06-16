import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeRequestEvent'
})
export class FilterPipeRequestEventPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(requestE =>requestE.idpeticionesEvento.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
