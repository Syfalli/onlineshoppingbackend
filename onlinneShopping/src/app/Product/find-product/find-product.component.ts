import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  productObj: Product = new Product();
  productId: number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch() {
    console.log("inside search" + this.productId);
    this.ProductService.getProductById(this.productId).
      subscribe(data => {
        this.productObj = data;
        
        if (this.productObj) {
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
