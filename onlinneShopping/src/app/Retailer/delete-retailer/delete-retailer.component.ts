import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-delete-retailer',
  templateUrl: './delete-retailer.component.html',
  styleUrls: ['./delete-retailer.component.css']
})
export class DeleteRetailerComponent implements OnInit {

  rId:number=0;
  retailerId: number = 0;
  retailerObj:any;
  constructor(private RetService: RetailerService, private router: Router) { }


  onSearch() {
    console.log("inside search" + this.retailerId);
    this.RetService.getRetailerById(this.retailerId).
      subscribe(data => {
        this.retailerObj = data;
        
        

      },
        (error) => {
          console.log('Retailer not found');
         
        })

  }




  ngOnInit(): void {
  }

}
