import { type TodoItem as TodoItemModel } from "../interface/TodoItem";

export interface TodoItemProps extends TodoItemModel {
  onDelete: (id: string) => void;
}

export const TodoItem = ({ id, text, onDelete }: TodoItemProps) => {
  return (
    <li>
      <input name={id} type="checkbox" />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
