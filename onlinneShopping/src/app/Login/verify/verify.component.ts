import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';

import { Router } from '@angular/router';
import { Login } from '../Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  userObj: Login = new Login();
  loginId: any;
  notFound: boolean = false;
  no: number=0;
 password:string="";
  pass:string="";
  

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch1()
  {
    this.router.navigate(['/adduser'])

  }
  onSearch() {
    console.log("inside search" + this.loginId);
   
    console.log("inside search" + this.password);
    this.LoginService.getUserById(this.loginId).
      subscribe(data => { // {1,sdsdc,adsfdsf,pass,515}
        this.userObj = data;
        this.pass=data.password;
        if (this.password===this.pass) {
          this.notFound = true;
          this.router.navigate(['/producthome'])
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