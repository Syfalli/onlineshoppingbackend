import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {

 
  addForm: any;
  submitted: boolean = false;
  message:string="successfully login";

  constructor(private formBuilder: FormBuilder, private router: Router,
    private loginService: LoginService) { }

    
  ngOnInit() {
    this.addForm = this.formBuilder.group({
   
    //  loginId: ['', Validators.required],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],

    });
  }
  onSubmit() {
    this.submitted = true;
    //alert(this.message);
    if (this.addForm.invalid) {
      return;
    }
    this.loginService.createLogin(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['/verifyuser']);
      });

  }

}
