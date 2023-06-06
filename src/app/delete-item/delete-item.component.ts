import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {
  @Input() allItems: [string, boolean][] = [];
  @Output() updateItems: EventEmitter<>
}
