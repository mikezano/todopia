"use client";

import { TodoItem as Item } from "../interface/TodoItem";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export interface TodoListProps {
  todos: Item[];
  onDelete: (id: number) => void;
}

export const TodoList = ({ todos, onDelete }: TodoListProps) => {
  return (
    <>
      {todos.map((todo: Item) => (
        <TodoItem key={todo.id} {...todo} onDelete={() => onDelete(todo.id)} />
      ))}
    </>
  );
};
