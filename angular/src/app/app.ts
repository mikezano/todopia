import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoForm } from './components/todo-form/todo-form';
import { TodoItem } from './components/todo-item/todo-item';
import { TodoList } from './components/todo-list/todo-list';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItem, TodoList, TodoForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular';
  public item: Item = { id: '1', text: 'Sample Item' };
  public todos: Item[] = [
    { id: '1', text: 'Learn Angular' },
    { id: '2', text: 'Build an App' },
    { id: '3', text: 'Deploy to Production' },
    { id: '4', text: 'Write Tests' },
    { id: '5', text: 'Refactor Code' },
  ];

  public handleDelete(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  public handleAdd(text: string): void {
    this.todos.push({ id: Date.now().toString(), text });
  }
}
