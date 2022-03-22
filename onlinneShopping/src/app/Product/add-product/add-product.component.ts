import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  
  addForm: any;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      prdId: ['', Validators.required],
      prdName: ['', Validators.required],
      prdPrice: ['', Validators.required],
      category: ['', Validators.required],
      rId: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.productService.createProduct(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-Product']);
      });
  }


}
