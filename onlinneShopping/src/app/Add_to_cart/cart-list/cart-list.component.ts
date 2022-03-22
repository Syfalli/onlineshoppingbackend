import { Component, OnInit } from '@angular/core';
import { Add_to_cart } from '../Add_to_cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private cartSer:CartService) { }
  cartList:Add_to_cart[]=[];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.cartSer.listAllcartList().subscribe(
      (      data: Add_to_cart[])=>
      {
        this.cartList=data;
        console.log("in cart-list  " +this.cartList )
      }    
    )
  }

}
