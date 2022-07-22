import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-question-type-drag-drop',
  templateUrl: './question-type-drag-drop.component.html',
  styleUrls: ['./question-type-drag-drop.component.css']
})
export class QuestionTypeDragDropComponent {

  @Input() editorhideshowstatus: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  counter(i: number) {
    return new Array(i);
}

  
  image_url: string = `<figure><img src="https://t4.ftcdn.net/jpg/03/32/56/67/240_F_332566713_q0QLBQ0BWkG5ed7DGRiuFIjvZNwEL9k2.jpg"></figure>`
  
  question1 = [this.image_url];
  number:any = 5;
  
  square_url:string =  `<img src= "assets/img/square.png">`
  circle_url: string = `<img src= "assets/img/circle.png">`
  rectangle_url: string = `<img src= "assets/img/rectangle.png">`
  triangle_url:string = `<img src= "assets/img/triangle.png">`
  hexagon_url: string = `<img src= "assets/img/hexagon.png">`
  pentagon_url: string = `<img src= "assets/img/pentagon.png">`

  new_arr = {
    0: this.square_url,
    1: this.circle_url,
    2: this.rectangle_url,
    3: this.triangle_url,
    4: this.hexagon_url,
    5: this.pentagon_url
  }
  question = [this.new_arr[4],this.new_arr[3], this.new_arr[3], this.new_arr[0], this.new_arr[1], this.new_arr[5], this.new_arr[0], this.new_arr[1], this.new_arr[1], this.new_arr[2], this.new_arr[0], this.new_arr[2], this.new_arr[4], this.new_arr[5]]

  answer: any[] = [];
  answer1: any[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    if (event.container.data.length == 4) {
      alert("answer is correct")
    }
  }

  drop1(event: CdkDragDrop<string[]>) {


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    console.log("question car",event.container.data.length)
    if (event.container.data.length == 6) {
      alert("answer is correct")
    }
  }

  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  drop3(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    
    console.log(event)
    // console.log(event.container.data)
    let a = event.container.data

    let flag = false;
    let count = 0

    for (let i = 0; i < a.length; i++) {

      if (this.new_arr[0] == a[i]) {
        count += 1
      }
    }
    if (count == a.length) {
      flag = true
    }
    else {
      flag = false
    }
    console.log(flag)
    console.log(event.container.data.length)
  }

}