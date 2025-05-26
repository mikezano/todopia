"use client";
import { useState } from "react";
import { TodoItem } from "../interface/TodoItem";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = (description: string) => {
    // Check for duplicates (case insensitive)
    if (
      todos.some(
        (todo) => todo.description.toLowerCase() === description.toLowerCase()
      )
    ) {
      return; // Don't add if already exists
    }

    const newTodo: TodoItem = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-page">
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};
