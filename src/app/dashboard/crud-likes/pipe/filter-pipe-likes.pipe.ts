import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeLikes'
})
export class FilterPipeLikesPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(like =>like.nombreGusto.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
