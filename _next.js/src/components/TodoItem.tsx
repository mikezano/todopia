import { TodoItem as Item } from "@/interface/TodoItem";
import { ThreeDButton } from "./ThreeDButton";
import "./TodoItem.css";

export interface TodoItemProps extends Item {
  onDelete: () => void;
}

export const TodoItem = ({ id, description, onDelete }: TodoItemProps) => {
  return (
    <li className="todo-item">
      <input type="checkbox" id={`todo-${id}`} />
      <label htmlFor={`todo-${id}`}>{description}</label>
      <ThreeDButton text="🗑️" onClick={onDelete} />
    </li>
  );
};
