import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public baseUrl="http://localhost:8090/order";

  constructor(private http:HttpClient) { }


  public listAllOrderList(){
   console.log(this.http.get<any[]>(this.baseUrl+'/orderlist'));

    return this.http.get<any[]>(this.baseUrl+'/orderlist');
  }


  public getOrderById(id:number)

  {

    console.log(this.http.get<any>(this.baseUrl+'/orderlist/'+id));

    return this.http.get<any>(this.baseUrl+'/orderlist/'+id);

  }


}
