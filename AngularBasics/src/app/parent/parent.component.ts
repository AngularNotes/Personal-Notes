import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentItem:string = 'Television';

  Property:string = "";

  parentFunction(event:string){
    // console.
    // this.Property = (event.target as HTMLInputElement).value;
    this.Property=  event
    console.log("pranet",event);
  }
  
  
}
