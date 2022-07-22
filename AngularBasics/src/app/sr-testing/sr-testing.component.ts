import { Component, OnInit } from '@angular/core';
// import { throws } from 'assert';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-sr-testing',
  templateUrl: './sr-testing.component.html',
  styleUrls: ['./sr-testing.component.css']
})
export class SrTestingComponent implements OnInit {
  pr:any;
  prod:string = "";

  constructor(private _msgService:DesignutilityService) { }

  ngOnInit(): void {
    this.newFunc1();
  }

  newFunc() {
    this._msgService.messageAlert();
  }

  newFunc1() {
    this.prod = this._msgService.product;
  }

  
  newfunc2() {
    this._msgService.product1().subscribe(productData => {
      this.pr = productData
      console.log("test,",productData)
    })
    
  }

}
