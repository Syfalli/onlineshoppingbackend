import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl="http://localhost:8090/product";

  constructor(private http:HttpClient) { }


  public listAllProductList(){
   console.log(this.http.get<any[]>(this.baseUrl+'/productlist'));

    return this.http.get<any[]>(this.baseUrl+'/productlist');
  }


  public getProductById(id:number)

  {

    console.log(this.http.get<any>(this.baseUrl+'/productlist/'+id));

    return this.http.get<any>(this.baseUrl+'/productlist/'+id);

  }



 // Create Product								
 public createProduct(user: Product) {

  return this.http.post<any>(this.baseUrl+'/addproduct',user);
 
}




}
