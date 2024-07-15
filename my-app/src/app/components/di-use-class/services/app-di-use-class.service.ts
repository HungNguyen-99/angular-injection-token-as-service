import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  selectedProducts: string[] = ['1', '2'];
  valueInner = 1;
  calculateTotal(): string[] {
    return this.selectedProducts;
  }
  addToCart(): void {
    console.log('add to cart', this.valueInner);
  }
}
