import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  saveit(){
    // the url,html tag should be called from here , how ?
   // window.open('/success');
    this.router.navigate(['/success']);
    }


}
