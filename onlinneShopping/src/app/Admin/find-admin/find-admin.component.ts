import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-find-admin',
  templateUrl: './find-admin.component.html',
  styleUrls: ['./find-admin.component.css']
})
export class FindAdminComponent implements OnInit {

  adminObj: Admin = new Admin();
  adminId: number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private AdminService: AdminService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch() {
    console.log("inside search" + this.adminId);
    this.AdminService.getAdminById(this.adminId).
      subscribe(data => {
        this.adminObj = data;
        
        if (this.adminObj) {
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
