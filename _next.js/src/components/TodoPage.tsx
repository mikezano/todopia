"use client";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoPage = () => {
  const [nextTodo, setNextTodo] = useState<string | null>(null);
  return (
    <div className="todo-page">
      <TodoForm onSubmit={setNextTodo} />
      <TodoList nextTodo={nextTodo} />
    </div>
  );
};
