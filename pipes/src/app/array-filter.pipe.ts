import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',
  standalone: true
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: string[], args?: any): any {
    if (value.length === 0 || args === undefined) return value;

    let filter = args.toLocaleLowerCase();

    return value.filter(item => item.toLocaleLowerCase().indexOf(filter) !== -1);
  }

}
