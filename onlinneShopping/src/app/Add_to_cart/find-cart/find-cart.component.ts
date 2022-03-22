import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Add_to_cart } from '../Add_to_cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-find-cart',
  templateUrl: './find-cart.component.html',
  styleUrls: ['./find-cart.component.css']
})
export class FindCartComponent implements OnInit {

  cartObj: Add_to_cart = new Add_to_cart();
  cartId: number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private CartService: CartService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch() {
    console.log("inside search" + this.cartId);
    this.CartService.getcartById(this.cartId).
      subscribe(data => {
        this.cartObj = data;
        
        if (this.cartObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error) => {
          console.log('cart not found');
          this.notFound = true;
        })

  }

}
