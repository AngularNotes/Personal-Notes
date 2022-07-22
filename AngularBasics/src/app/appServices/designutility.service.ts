import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/users";

  product1():Observable<any> {
    return this.http.get(this.url)
  }
  
  messageAlert() {
    alert("hello user");
  }

  product:string = "watch";

  // userName:String = "hi user, how are you";
  userName = new Subject<any>();

}
