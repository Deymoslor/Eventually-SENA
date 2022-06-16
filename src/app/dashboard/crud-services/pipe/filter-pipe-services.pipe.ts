import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeServices'
})
export class FilterPipeServicesPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(services =>services.nombreServicio.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
