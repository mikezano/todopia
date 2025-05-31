import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import type { TodoItem } from "./interface/TodoItem";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<TodoItem[]>([
    {
      id: "apple",
      text: "apple",
    },
    {
      id: "banana",
      text: "banana",
    },
  ]);

  const handleOnDelete = (id: string) => {
    console.log("going to delete");
    setItems((previous) => {
      return previous.filter((item: TodoItem) => item.id !== id);
    });
  };

  const handleOnAdd = (text: string) => {
    setItems((previous) => {
      return [...previous, { id: Date.now().toString(), text }];
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TodoForm onAdd={handleOnAdd}></TodoForm>
      <TodoList items={items} onDelete={handleOnDelete} />
    </>
  );
}

export default App;
