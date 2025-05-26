"use client";

import { TodoPage } from "@/components/TodoPage";
import { TodoItem } from "@/interface/TodoItem";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";

async function fetchTodos() {
  console.log("Fetching todos from API...");
  const response = await fetch("/api/todos", {
    method: "GET",
    cache: "no-store", // Ensures fresh data on each request
  });
  const data = await response.json();
  // Ensure IDs are numbers
  return data.map((todo: any) => ({
    ...todo,
    id: typeof todo.id === "string" ? parseInt(todo.id, 10) : todo.id,
  }));
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const refreshTodos = useCallback(async () => {
    const data = await fetchTodos();
    console.log("Fetched Todos:", data);
    setTodos(data);
  }, []);

  useEffect(() => {
    refreshTodos();
  }, [refreshTodos]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TodoPage initialTodos={todos} onRefresh={refreshTodos} />
      </main>
    </div>
  );
}
