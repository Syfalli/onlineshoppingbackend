import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';

import { Router } from '@angular/router';
import { Login } from 'src/app/appmodel/login';
// import { Login } from '../Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  // userObj: Login = new Login();
  loginId: any; 
  email:string="";
  notFound: boolean = false;
  no: number=0;
 password:string="";
  pass:string="";
  login: Login = new Login();
  

  constructor(private customerService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch1()
  {
    this.router.navigate(['/adduser'])

  }
  // onSearch() {
  //   console.log("inside search" + this.loginId);
   
  //   console.log("inside search" + this.password);
  //   this.LoginService.getUserById(this.loginId).
  //     subscribe(data => { // {1,sdsdc,adsfdsf,pass,515}
  //       this.userObj = data;
  //       this.pass=data.password;
  //       if (this.password===this.pass) {
  //         this.notFound = true;
  //         this.router.navigate(['/producthome'])
  //       }
  //       {
  //         this.notFound = false;
  //       }
  //       console.log("inside search" + this.pass);
  //     },
  //       (error) => {
  //         console.log('cart not found');
  //         this.notFound = true;
  //       })

  // }



  loginCheck() {
    console.log(this.login);
    this.customerService.login(this.login).subscribe(response => {
      //alert(JSON.stringify(response));

      // sessionStorage.setItem("customerName", response['name'])
      // console.log(response);
      // sessionStorage.setItem('registeredCartId', response['cartId']);
      if (response.status == true) {
        // let customerId = response.id;
        // sessionStorage.setItem('customerId', String(customerId));
        alert('welcome to our website')
        this.router.navigate(['producthome']);
      } else
       alert('error in login')
      // setInterval(function () { location.reload(); }, 1500);

    })



  }





 /*
  loginForm : any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  password:any;
  data:any;
  constructor(private formBuilder: FormBuilder, private router: Router,private vservice:LoginService) { }

  onSubmit(){

    this.vservice.getPassById(this.loginForm.controls.loginId.value).
    subscribe(data => {
        this.password = data;
        this.router.navigate(['product']);},
        (error) => {
          console.log('cart not found');
          this.invalidLogin = true;
         // this.router.navigate(['product'])
        })
    
   // this.vservice.getPassById(this.loginForm.controls.loginId.value).subscribe(data=>this.password=data);
 console.log("USERNAME"+this.loginForm.controls.loginId.value);
 console.log("PASSWORD"+this.password);
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(
    this.loginForm.controls.password.value==this.password){
      localStorage.setItem("username",this.loginForm.controls.loginId.value);
       this.router.navigate(['product']);
    }
    else{
      this.invalidLogin = true;
    }
  }
  // onSubmit(){
    
  //   this.submitted = true;
  //   if(this.loginForm.invalid){
  //     return;
  //   }
  //   if(this.loginForm.controls.email.value =="user" &&
  //   this.loginForm.controls.password.value=="123456"){
  //     localStorage.setItem("username",this.loginForm.controls.email.value);
  //     this.router.navigate(['product']);
  //   }
  //   else{
  //     this.invalidLogin = true;
  //   }
  // }

  ngOnInit() {    

    this.loginForm = this.formBuilder.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  */
}








