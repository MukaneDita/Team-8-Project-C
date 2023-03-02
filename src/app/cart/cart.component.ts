import { Component, OnInit } from '@angular/core';
import { shop, Ishop } from '../shop';
import { CartService } from '../cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Ishop[] = [];
  total: number =0;
  newCheckout: any = "";

  //form
  checkout = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl(''),
    address: new FormControl(''),
  });

  onSubmit(){
    this.newCheckout = this.checkout.value;
    console.log(this.newCheckout);
          // window.alert(`Thank you for shopping with us, ${a.firstName} ${a.lastName}! You'll get order confirmation on your email: ${a.email} soon. And then we'll make sure to send your order to address: ${a.address} as soon as possible. Have a nice day!`);
    }
  constructor(private cartService: CartService) { }

  //delete btn from cart
  deleteQtty(i:number){
    this.cartService.deleteQtty(i);
    this.total = this.cartService.total();
  }
  
  ngOnInit(): void {
     this.cart = this.cartService.getCart();
     this.total = this.cartService.total()

  }

}
