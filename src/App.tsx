import React, { useState } from "react";
import { uuid } from "uuidv4";

import { List, TodoListItem } from "./components";

const initialTodos: Array<Todo> = [
  { id: uuid(), text: "walk doggy", isComp: false },
  { id: uuid(), text: "play fetch", isComp: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) return { ...todo, isComp: !todo.isComp };
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <List name="oz" age={1} person={{ name: "oz", age: "12" }} />
      {todos.map(item => (
        <TodoListItem key={item.id} todo={item} toggleTodo={toggleTodo} />
      ))}
    </>
  );
};

export default App;
