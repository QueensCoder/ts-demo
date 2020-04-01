import React from "react";

interface TodoListItemProps {
  todo: string;
  isCompleted: boolean;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, isCompleted }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} />
        {todo}
      </label>
    </li>
  );
};

export default TodoListItem;
