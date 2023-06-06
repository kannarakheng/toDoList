import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items: [string, boolean][] = [
    ["Item1", false], 
    ["Item2", false]
  ];

  addNewItem = (newItem: string) => {
    this.items.push([newItem, false]);
  }

  updateItem = (index: number, selected: boolean): void => {
    this.items[index][1] = selected;
  }

  updateList = (itemsList: [string, boolean]): void => {
    this.items[index][1] = selected;
  }

}
