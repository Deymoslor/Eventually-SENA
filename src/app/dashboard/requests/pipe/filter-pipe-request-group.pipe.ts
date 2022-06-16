import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeRequestGroup'
})
export class FilterPipeRequestGroupPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(requestG =>requestG.idpeticionesGrupo.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
