import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameShortener'
})
export class NameShortenerPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value) {
      let parts = value.split(' ');
      parts.shift();
      parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

      return parts.join(' ');
    }
    return null;
  }

}
