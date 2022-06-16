import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeUsers'
})
export class FilterPipeUsersPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(user =>user.nombre.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
