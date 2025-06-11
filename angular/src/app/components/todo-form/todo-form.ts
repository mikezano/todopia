import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  public todoText = new FormControl('');
  public onAdd = output<string>();

  public handleAdd(): void {
    console.log('handleAdd');
    const text = this.todoText.value?.trim();
    console.log('text', text);
    if (text) {
      this.onAdd.emit(text);
    }
  }
}
