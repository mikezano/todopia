import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  public readonly item = input.required<Todo>();
  public onDelete = output<string>();

  public get Item(): Todo {
    return this.item();
  }
  public delete = () => {
    this.onDelete.emit(this.Item.id);
  };
}
