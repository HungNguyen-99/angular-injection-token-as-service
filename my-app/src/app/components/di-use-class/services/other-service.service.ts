import { Injectable } from '@angular/core';

@Injectable()
export class CartOtherService {
  selectedProducts: string[] = ['1', '2'];
  calculateTotal(): string[] {
    return this.selectedProducts;
  }
  addToCart(): void {
    console.log('add to other cart');
  }
}
