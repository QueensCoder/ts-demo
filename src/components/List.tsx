import React from "react";
import { TodoListItem } from "./";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(item => (
        <TodoListItem key={item.id} todo={item} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
