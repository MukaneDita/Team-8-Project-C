import { Component, OnInit } from '@angular/core';
import { shop, Ishop } from '../shop';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

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

//sweet alert functions for pop-up
popUp(param: string){
  Swal.fire({
    imageUrl: `${param}`,
    imageHeight: 600,
    imageWidth: "90%",
    width: "40%",
    imageAlt: 'A tall image'
  })
}


  addToCart(val: Ishop) {
    this.cartService.addToCart(val);
  }
  
  ngOnInit(): void {
  }
}
