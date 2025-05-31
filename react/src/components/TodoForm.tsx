import { useRef } from "react";
export interface TodoFormProps {
  onAdd: (text: string) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <form noValidate>
      <input ref={input} type="text" />
      <button
        type="button"
        onClick={() => {
          if (input.current && input.current.value) onAdd(input.current.value);
        }}
      >
        Add
      </button>
    </form>
  );
};
