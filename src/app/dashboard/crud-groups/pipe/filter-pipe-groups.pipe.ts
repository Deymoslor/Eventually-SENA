import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeGroups'
})
export class FilterPipeGroupsPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(grupo =>grupo.nombreGrupo.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
