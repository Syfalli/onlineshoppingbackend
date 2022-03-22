import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Retailer } from './Retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  public baseUrl="http://localhost:8090/retailer";

  constructor(private http:HttpClient) { }


  public listAllRetailerList(){
   console.log(this.http.get<any[]>(this.baseUrl+'/retailerlist'));

    return this.http.get<any[]>(this.baseUrl+'/retailerlist');
  }


  public getRetailerById(id:number)

  {

    console.log(this.http.get<any>(this.baseUrl+'/retailerlist/'+id));

    return this.http.get<any>(this.baseUrl+'/retailerlist/'+id);

  }



  public deleteRetailer(id:number)

  {

   // console.log(this.http.get<any>(this.baseUrl+'/deleterecord/'+id));

    return this.http.delete<number>(this.baseUrl+'/deleterecord/'+id);

  }
  

  // public addRetailer(id:number)

  // {

  //   console.log(this.http.get<any>(this.baseUrl+'/addretailer/'+id));

  //   return this.http.delete<any>(this.baseUrl+'/addretailer/'+id);

  // }
  public addRetailer(user: Retailer) {

    return this.http.post<any>(this.baseUrl+'/addretailer',user);

  }


}
