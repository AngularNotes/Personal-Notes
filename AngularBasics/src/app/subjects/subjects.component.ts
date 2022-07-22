import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styles: [
  ]
})
export class SubjectsComponent implements OnInit {

  uName:string = "";
  constructor(private _abc:DesignutilityService) { 
    this._abc.userName.subscribe(uname => {this.uName = uname})
  }

  ngOnInit(): void {
  }

  myfunc3(information:any) {
    this._abc.userName.next(information.value);
  }
}
