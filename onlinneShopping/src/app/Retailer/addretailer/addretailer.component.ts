import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent implements OnInit {

 
  addForm: any;
  submitted: boolean = false;
  message:string="successfully login";

  constructor(private formBuilder: FormBuilder, private router: Router,
    private retService: RetailerService) { }

    
  ngOnInit() {
    this.addForm = this.formBuilder.group({
   
    //  loginId: ['', Validators.required],
      //rId: ['', Validators.required],
      rName: ['', Validators.required],
      rEmail: ['', Validators.required],
      rUid: ['', Validators.required],
      rPassword: ['', Validators.required],
      aId: ['', Validators.required],

    });
  }
  onSubmit() {
    this.submitted = true;
    alert(this.message);
    if (this.addForm.invalid) {
      return;
    }
    this.retService.addRetailer(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['/verfiyRetailer']);
      });

  }


}
