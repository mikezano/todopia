"use client";
import { TodoItem } from "../interface/TodoItem";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const postData = async (todoItem: TodoItem) => {
  const response = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...todoItem }),
  });

  return await response.json();
};

export interface TodoPageProps {
  initialTodos?: TodoItem[];
  onRefresh: () => Promise<void>;
}

export const TodoPage = ({ initialTodos, onRefresh }: TodoPageProps) => {
  const handleAddTodo = async (description: string) => {
    // Check for duplicates (case insensitive)
    if (
      initialTodos?.some(
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
    await postData(newTodo);
    // Use the onRefresh prop to fetch fresh data
    await onRefresh();
  };
  const handleDeleteTodo = async (id: number) => {
    console.log("Deleting todo with ID:", id);
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Failed to delete todo:", await response.text());
      return;
    }

    // Refresh the todo list after deletion
    await onRefresh();
  };

  return (
    <div className="todo-page">
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={initialTodos ?? []} onDelete={handleDeleteTodo} />
    </div>
  );
};
