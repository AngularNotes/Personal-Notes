import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  
  myReactiveForm:any;
  name = new FormControl(null, Validators.required);
  username = new FormControl("hi");
  ngOnInit(): void {
    // this.myReactiveForm = new FormGroup({
    //   
    //   'email' : new FormControl(null),
    //   'phoneNo' : new FormControl(null),
    //   'password' : new FormControl(null)
    // });
  }

  

    profileForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
  })
  onSubmit() {
    alert('hello'); 
    console.log(this.profileForm);
  }
}
