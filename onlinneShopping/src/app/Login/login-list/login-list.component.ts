import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  constructor(private userSer:LoginService) { }
  userList:Login[]=[];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.userSer.listAllUserList().subscribe(
      (      data: Login[])=>
      {
        this.userList=data;
        console.log("in User-list  " +this.userList )
      }    
    )
  }


 

}
