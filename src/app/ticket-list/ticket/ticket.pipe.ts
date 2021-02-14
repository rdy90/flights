import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getPrice',
  pure: true
})
export class GetPricePipe implements PipeTransform {
  transform(price: number, currency: string = 'P'): string {
    const preparedPrice = String(price / 1000).split('.').join(' ');
    return `${preparedPrice} ${currency}`;
  }
}
