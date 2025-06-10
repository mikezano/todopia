import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from './components/todo-item/todo-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular';
}
