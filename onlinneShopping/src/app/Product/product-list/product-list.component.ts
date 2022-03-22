import { Component, OnInit } from '@angular/core';
import { Add_to_cart } from 'src/app/Add_to_cart/Add_to_cart';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productSer:ProductService) { }
  productList:Product[]=[];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.productSer.listAllProductList().subscribe(
      (      data: Product[])=>
      {
        this.productList=data;
        console.log("in Product-list  " +this.productList )
      }    
    )
  }


}
