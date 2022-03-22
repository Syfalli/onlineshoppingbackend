import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  addForm: any;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router,
    private cartService: CartService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      cartId: ['', Validators.required],
      loginId: ['', Validators.required],
      prdId: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.cartService.createCart(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-cart']);
      });
  }

}
