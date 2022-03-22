import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public baseUrl="http://localhost:8090/admin";

  constructor(private http:HttpClient) { }


  public listAllAdminList(){
   console.log(this.http.get<any[]>(this.baseUrl+'/adminlist'));

    return this.http.get<any[]>(this.baseUrl+'/adminlist');
  }


  public getAdminById(id:number)

  {

    console.log(this.http.get<any>(this.baseUrl+'/adminlist/'+id));

    return this.http.get<any>(this.baseUrl+'/adminlist/'+id);

  }


 //Add Admin								
 public createAdmin(user: Admin) {

  return this.http.post<any>(this.baseUrl+'/addadmin',user);
 // return this.http.post(this.baseUrl,+'/addcart/'+ user);
}




}
