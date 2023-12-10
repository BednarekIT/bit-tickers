import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, currency?: string): string {

    if (currency) {
      return currency + value.toLocaleString('fr-FR', {maximumFractionDigits: 2}).replace(',', '.')
    }

    return  value.toLocaleString('fr-FR', {maximumFractionDigits: 2}).replace(',', '.')
  }

}
