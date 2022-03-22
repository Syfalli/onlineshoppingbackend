import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Login/Login';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-verify-admin',
  templateUrl: './verify-admin.component.html',
  styleUrls: ['./verify-admin.component.css']
})
export class VerifyAdminComponent implements OnInit {

 
  userObj: Login = new Login();
  aId: any;
  notFound: boolean = false;
  no: number=0;
  aPassword:string="";
  pass:string="";
  

  constructor(private AdminService: AdminService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch() {
    console.log("inside search" + this.aId);
   
    console.log("inside search" + this.aPassword);
    this.AdminService.getAdminById(this.aId).
      subscribe(data => {
        this.userObj = data;
        this.pass=data.aPassword;
        if (this.aPassword===this.pass) {
          this.notFound = true;
          this.router.navigate(['/retailer'])
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
