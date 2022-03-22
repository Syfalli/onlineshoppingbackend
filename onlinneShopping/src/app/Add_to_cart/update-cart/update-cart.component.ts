import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   user: any;
//   editForm: any;
//   submitted: boolean = false;
//   constructor(private formBuilder: FormBuilder,private router: Router, 
//     private userService: CartService) { }
  
//   ngOnInit() {
//     if(localStorage.getItem("username")!=null){
//     let userId = localStorage.getItem("editUserId");
//     if(!userId) {
//       alert("Invalid action.")
//       this.router.navigate(['list-user']);
//       return;
//     }
//     this.editForm = this.formBuilder.group({
//       id: [],
//       email: ['', Validators.required],
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required]
//     });

//     this.userService.getUserById(+userId)
//       .subscribe( data => {
//         this.editForm.setValue(data);
//       });
//     }
//     else
//         this.router.navigate(['/login']);
//   }

//   onSubmit() {
//     this.submitted = true;
//     if(this.editForm.invalid){
//       return;
//     }
//     this.userService.updateUser(this.editForm.value)
//       .pipe(first())
//       .subscribe(
//         data => {
//           this.router.navigate(['list-user']);
//         },
//         error => {
//           alert(error);
//         });
//   }

//    // logOff user
//    logOutUser():void{
//     if(localStorage.getItem("username")!=null){
//       localStorage.removeItem("username");
//       this.router.navigate(['/login']);
//     }
// }
  
  

}
