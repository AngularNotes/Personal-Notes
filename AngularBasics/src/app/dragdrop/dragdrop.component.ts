import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


/**
 * @title Drag&Drop connected sorting
 */
 @Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent {
  todo = ['Get up','Get to work', 'Pick up groceries', 'Go home', 'Fall asleep', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  done = [''];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    console.log(event.container.data.length)


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
}