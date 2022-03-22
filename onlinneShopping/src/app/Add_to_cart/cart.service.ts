import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Add_to_cart } from './Add_to_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public baseUrl = "http://localhost:8090/cart";

  constructor(private http: HttpClient) { }


  public listAllcartList() {
    console.log(this.http.get<any[]>(this.baseUrl + '/cartlist'));

    return this.http.get<any[]>(this.baseUrl + '/cartlist');
  }


  public getcartById(id: number) {

    console.log(this.http.get<any>(this.baseUrl + '/cartlist/' + id));

    return this.http.get<any>(this.baseUrl + '/cartlist/' + id);

  }


  // Create User								
  public createCart(user: Add_to_cart) {

    return this.http.post<any>(this.baseUrl + '/addcart', user);
    
  }



  // // Modify User								
  // updateCart(user: Add_to_cart) {
  //   return this.http.put(this.baseUrl + '/updatecart' + user.id, user);
  // }




}
