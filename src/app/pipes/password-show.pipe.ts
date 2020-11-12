import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordShow'
})
export class PasswordShowPipe implements PipeTransform {

  transform(value: string, show: boolean = false): string {
    if (show) {
      return value;
    } else {
      return value = value.replace(/./g, "*");
    }
  }
}
