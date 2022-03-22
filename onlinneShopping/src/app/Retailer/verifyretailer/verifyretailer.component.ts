import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retailer } from '../Retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-verifyretailer',
  templateUrl: './verifyretailer.component.html',
  styleUrls: ['./verifyretailer.component.css']
})
export class VerifyretailerComponent implements OnInit {

  
 
  userObj: Retailer = new Retailer();
  rId: any;
  notFound: boolean = false;
  no: number=0;
  rPassword:string="";
  pass:string="";
  

  constructor(private RetailerService: RetailerService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch1()
  {
    this.router.navigate(['/addretailer'])
    
  }
  onSearch() {
    console.log("inside search" + this.rId);
   
    console.log("inside search" + this.rPassword);
    this.RetailerService.getRetailerById(this.rId).
      subscribe(data => {
        this.userObj = data;
        this.pass=data.rPassword;
        if (this.rPassword===this.pass) {
          this.notFound = true;
          this.router.navigate(['/product'])
        }
        {
          this.notFound = false;
        }
        console.log("inside search" + this.pass);
      },
        (error) => {
          console.log('cart not found');
          this.notFound = true;
        })

  }

}
