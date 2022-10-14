import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendtext'
})
export class AppendTextPipe implements PipeTransform {

  transform(value: unknown, textToAppend?: string): string {
    return `${value}|${textToAppend ?? 'vazio'}|`
  }

}
