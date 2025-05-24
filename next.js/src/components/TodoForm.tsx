import { useRef } from "react";
import { ThreeDButton } from "./ThreeDButton";
import "./TodoForm.css";

export interface ThreeDButtonProps {
  onSubmit: (todo: string) => void;
}

export const TodoForm = ({ onSubmit }: ThreeDButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNewEntry = () => {
    if (!inputRef.current) return;
    onSubmit(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="search"
        placeholder="... Add Todo"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleNewEntry();
          }
        }}
      />
      <ThreeDButton text="Add" onClick={handleNewEntry} />
    </div>
  );
};
