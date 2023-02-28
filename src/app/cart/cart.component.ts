import { Component, OnInit } from '@angular/core';
import { shop, Ishop } from '../shop';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Ishop[] = [];
  total: number =0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
     this.cart = this.cartService.getCart();
     this.total = this.cartService.total()

  }

}
