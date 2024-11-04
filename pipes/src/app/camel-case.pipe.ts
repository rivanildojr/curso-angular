import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let values = value.split(' ');
    let result = '';

    for (const v of values) {
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(value: string): string {
    return value.substring(0, 1).toLocaleUpperCase() + value.substring(1).toLocaleLowerCase();
  }

}
