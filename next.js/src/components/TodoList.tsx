"use client";

import { useEffect, useState } from "react";
import { TodoItem as Item } from "../interface/TodoItem";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export interface TodoListProps {
  nextTodo: string | null;
}
export const TodoList = ({ nextTodo }: TodoListProps) => {
  const [todos, setTodos] = useState<Item[]>([]);

  useEffect(() => {
    if (!nextTodo) return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Date.now(), description: nextTodo, completed: false },
      ];
    });
  }, [nextTodo]);

  return (
    <>
      {todos.map((todo: Item) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDelete={() => {
            setTodos(todos.filter((t) => t.id !== todo.id));
          }}
        />
      ))}
    </>
  );
};
