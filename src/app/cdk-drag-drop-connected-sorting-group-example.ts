import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from "@angular/cdk/drag-drop";
import { TodoItemNode } from "./drag-tree/drag-tree.component";

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: "cdk-drag-drop-connected-sorting-group-example",
  templateUrl: "cdk-drag-drop-connected-sorting-group-example.html",
  styleUrls: ["cdk-drag-drop-connected-sorting-group-example.css"]
})
export class CdkDragDropConnectedSortingGroupExample {
  todo: TodoItemNode[] = [
    "Get to work",
    "Pick up groceries",
    "Go home",
    "Fall asleep"
  ];

  done: TodoItemNode[]; // = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  //newNode:TodoItemNode;
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // let item = event.container.data.find(x => x == event.previousContainer.data[event.previousIndex]);
      // if (item == undefined)
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

newNode:any;
  add(event: CdkDragDrop<TodoItemNode[]>) {
    console.log(event.previousContainer.data[event.previousIndex]);
    this.newNode = event.previousContainer.data[event.previousIndex];
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
