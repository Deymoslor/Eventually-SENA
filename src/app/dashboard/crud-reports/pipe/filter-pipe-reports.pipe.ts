import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeReports'
})
export class FilterPipeReportsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
