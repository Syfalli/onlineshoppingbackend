import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retailer } from '../Retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-list',
  templateUrl: './retailer-list.component.html',
  styleUrls: ['./retailer-list.component.css']
})
export class RetailerListComponent implements OnInit {

  status:string="";

  constructor(private retSer:RetailerService,private router: Router) { }
  retailerList:Retailer[]=[];
  
  ngOnInit(): void {
    this.loadData();
   
  }
  loadData()
  {
    this.retSer.listAllRetailerList().subscribe(
      (      data: Retailer[])=>
      {
        this.retailerList=data;
        console.log("in cart-list  " +this.retailerList )
      }    
    )
  }

  getVal(val: any)
  {
    console.log(val);
    this.retSer.deleteRetailer(val).subscribe(() => this.status = 'Delete successful');;
    
  }

  // onSubmit()
  // {
  // this.retSer.deleteRetailer(this.rId);
    
  // }


}
