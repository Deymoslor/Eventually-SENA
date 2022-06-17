import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSuppliers'
})
export class FilterSuppliersPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === '' || args === undefined){
      return value;
    }
    return value.filter(supplier =>supplier.nombreProveedor.toLowerCase().indexOf(args.toLowerCase()) != -1);
  }

}
