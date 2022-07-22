import { Component, Input, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    this.sendData();
  }

  @Input() item:string="";

  @Output() property = new EventEmitter<any>();
  property2:string = "message from child";
  
  sendData() {
    console.log("sendData")
    this.property.emit(this.property2);
  }
}