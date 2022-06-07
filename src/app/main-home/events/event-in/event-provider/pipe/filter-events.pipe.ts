import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEvents'
})
export class FilterEventsPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(proveedor =>proveedor.tipoServicio.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
