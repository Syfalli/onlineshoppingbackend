import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-find-login',
  templateUrl: './find-login.component.html',
  styleUrls: ['./find-login.component.css']
})
export class FindLoginComponent implements OnInit {


  userObj: Login = new Login();
  loginId: number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch() {
    console.log("inside search" + this.loginId);
    this.LoginService.getUserById(this.loginId).
      subscribe(data => {
        this.userObj = data;
        
        if (this.userObj) {
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
