import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.css']
})
export class FindOrderComponent implements OnInit {

  orderObj: Order = new Order();
  orderId: number = 0;
  notFound: boolean = false;
  no: number = 0;
  constructor(private OrderService: OrderService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch() {
    console.log("inside search" + this.orderId);
    this.OrderService.getOrderById(this.orderId).
      subscribe(data => {
        this.orderObj = data;

        if (this.orderObj) {
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
