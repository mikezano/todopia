import { ThreeDButton } from "./ThreeDButton";
import "./TodoForm.css";

export interface ThreeDButtonProps {
  onSubmit: (todo: string) => void;
}

export const TodoForm = ({ onSubmit }: ThreeDButtonProps) => {
  return (
    <div className="todo-form">
      <input id="description" type="search" placeholder="...Add item" />
      <ThreeDButton
        text="Add"
        onClick={() => {
          const input = document.getElementById(
            "description"
          ) as HTMLInputElement;
          onSubmit(input.value);
          input.value = "";
          input.focus();
        }}
      />
    </div>
  );
};
