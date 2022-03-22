import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retailer } from '../Retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-find-retailer',
  templateUrl: './find-retailer.component.html',
  styleUrls: ['./find-retailer.component.css']
})
export class FindRetailerComponent implements OnInit {

  retailerObj: Retailer = new Retailer();
  retailerId: number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private RetService: RetailerService, private router: Router) { }

  ngOnInit(): void {

  }
  onSearch() {
    console.log("inside search" + this.retailerId);
    this.RetService.getRetailerById(this.retailerId).
      subscribe(data => {
        this.retailerObj = data;
        
        if (this.retailerObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error) => {
          console.log('Retailer not found');
          this.notFound = true;
        })

  }


}
