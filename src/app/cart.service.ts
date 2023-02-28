import { Injectable } from '@angular/core';
import { Ishop } from './shop';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart : Array<Ishop> = [];
  constructor() { }

  addToCart(photo: Ishop) {
    this.cart.push(photo);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
  total() {
    let total: number = 0;
    for(let val of this.cart) {
      total = total + (val.price * val.qtty);
    }
    return total;
  }
}
