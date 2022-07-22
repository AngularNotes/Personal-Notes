import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  xyz:string="hello user";
  abc:boolean=true;

  msg:string ="";
  onAdd() {
    this.msg = "your text changed";
  }
 
  onClick(event: Event){
      console.log(event);
      console.log((event.target as HTMLInputElement).value);
  }

  inputInfo(value: any) {
      console.log(value);
  }

  demo:string="this is a demo";
  
}
