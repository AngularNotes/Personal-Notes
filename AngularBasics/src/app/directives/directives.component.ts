import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isValid:boolean = true;
  create() {
    this.isValid = false;
  }

  selectedProduct:string = "";
  getProductVal(event: Event) {
    var val = (event.target as HTMLInputElement).value;
    this.selectedProduct = val;
  }

  products = [
    {proimg:"data:image/jpeg;base64,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", name:"Laptop", price:"50000", warranty:"2 years"},
    {proimg:"data:image/jpeg;base64,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", name:"TV", price:"25000", warranty:"1 year"},
    {proimg:"data:image/jpeg;base64,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", name:"AC", price:"55000", warranty:"5 years"},
    {proimg:"data:image/jpeg;base64,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", name:"Mobile", price:"30000", warranty:"1 year"}
  ];

  users : any[] = [];
  createUser(uname:any) {
    console.log(uname.value);
    this.users.push({name: uname.value});
  }
  removeUser() {
    this.users.splice(this.users.length-1);
  }
  removeItem(item:any) {
    this.users.splice(item,1);
  }
}