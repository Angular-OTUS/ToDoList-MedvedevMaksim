import { Component, input } from '@angular/core';
import { Todo } from '../../model/types';

@Component({
  selector: 'app-to-do-item',
  imports: [],
  templateUrl: './to-do-item.html',
  styleUrl: './to-do-item.scss',
})
export class ToDoItem {
  todo = input.required<Todo>();
}
