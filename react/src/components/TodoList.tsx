import { type TodoItem as TodoItemModel } from "../interface/TodoItem";
import { TodoItem } from "./TodoItem";

export interface TodoListProps {
  items: TodoItemModel[];
  onDelete: (id: string) => void;
}

export const TodoList = ({ items, onDelete }: TodoListProps) => {
  return (
    <ul>
      {items.map((item: TodoItemModel) => (
        <TodoItem key={item.id} {...item} onDelete={onDelete} />
      ))}
    </ul>
  );
};
