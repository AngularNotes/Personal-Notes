import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread-operator',
  templateUrl: './spread-operator.component.html',
  styleUrls: ['./spread-operator.component.css']
})
export class SpreadOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  line1 = ["hello", "apple", "how", "are", "you"];
  

}
