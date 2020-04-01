import React, { useState } from "react";
import { uuid } from "uuidv4";

import { TodoList, AddTodoForm } from "./components";

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

  const addTodo = (newTodo: string) => {
    setTodos([...todos, { text: newTodo, isComp: false, id: uuid() }]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
