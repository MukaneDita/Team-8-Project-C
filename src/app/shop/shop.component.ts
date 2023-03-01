import { Component, OnInit } from '@angular/core';
import { shop, Ishop } from '../shop';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shop: Array<Ishop> = shop;
  cart: Ishop[] = [];

  constructor(private cartService: CartService) { }

  //this function disables the Buy button after it clicked
  actionMethod($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.
}

  addToCart(val: Ishop) {
    this.cartService.addToCart(val);
  }
  
  ngOnInit(): void {
  }
}
