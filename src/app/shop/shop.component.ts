import { Component, OnInit } from '@angular/core';
import { shop, Ishop } from '../shop'; 
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent  implements OnInit {
  shop: Array<Ishop> = shop;
  cart: Ishop[] = [];

  constructor(private cartService: CartService) { }

  addToCart(val: Ishop) {
    window.alert('Your order has been added to the cart!');
    this.cartService.addToCart(val);
  }

  ngOnInit(): void {
  }
}
