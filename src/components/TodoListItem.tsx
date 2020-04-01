import React from "react";

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
