import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private cartSer:OrderService) { }
  orderList:Order[]=[];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.cartSer.listAllOrderList().subscribe(
      (      data: Order[])=>
      {
        this.orderList=data;
        console.log("in Order-list  " +this.orderList )
      }    
    )
  }

}
