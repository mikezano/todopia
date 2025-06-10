import { Component, input, output } from '@angular/core';
import { Item } from '../../models/item';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  public readonly todos = input.required<Item[]>();
  public onDelete = output<string>();

  get todosList(): Item[] {
    return this.todos();
  }

  public handleDelete(id: string): void {
    this.onDelete.emit(id);
  }
}
