import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  addForm: any;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      aId: ['', Validators.required],
      aName: ['', Validators.required],
      aUid: ['', Validators.required],
      aPassword: ['', Validators.required],
      aContact: ['', Validators.required],
      aEmail: ['', Validators.required],
      
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.adminService.createAdmin(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-user']);
      });
  }

}
