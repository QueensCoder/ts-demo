import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}
const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  const { text, isComp } = todo;
  return (
    <li>
      <label style={{ textDecoration: isComp ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={isComp}
          onChange={() => toggleTodo(todo)}
        />
        {text}
      </label>
    </li>
  );
};

export default TodoListItem;
