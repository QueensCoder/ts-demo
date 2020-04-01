import React from "react";
import { Todo } from "../types/types";

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const { text, isComp } = todo;
  return (
    <li>
      <label>
        <input type="checkbox" checked={isComp} />
        {text}
      </label>
    </li>
  );
};

export default TodoListItem;
