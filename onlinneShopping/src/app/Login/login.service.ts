import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  pass:string="";

  public baseUrl="http://localhost:8090/login";

  constructor(private http:HttpClient) { }


  public listAllUserList(){
   console.log(this.http.get<any[]>(this.baseUrl+'/loginlist'));

    return this.http.get<any[]>(this.baseUrl+'/loginlist');
  }


  public getUserById(id:number)

  {

    console.log(this.http.get<any>(this.baseUrl+'/loginlist/'+id));
    return this.http.get<any>(this.baseUrl+'/loginlist/'+id);

  }


 // Create User								
 public createLogin(user: Login) {

  return this.http.post<any>(this.baseUrl+'/addlogin',user);
 
}



public getPassById(loginId: number) {

  console.log(this.http.get<string>(this.baseUrl + '/getpassword/' + loginId));

  return this.http.get<string>(this.baseUrl + '/getpassword/' + loginId);

}






}