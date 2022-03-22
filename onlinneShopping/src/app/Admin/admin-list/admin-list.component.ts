import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  constructor(private adminSer:AdminService) { }
  adminList:Admin[]=[];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.adminSer.listAllAdminList().subscribe(
      (      data: Admin[])=>
      {
        this.adminList=data;
        console.log("in Admin-list  " +this.adminList )
      }    
    )
  }

}
