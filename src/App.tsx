import React from "react";
import { uuid } from "uuidv4";

import { List, TodoListItem } from "./components";

type Todo = {
  text: string;
  isComp: boolean;
  id: string;
};

const todos: Array<Todo> = [
  { id: uuid(), text: "walk doggy", isComp: false },
  { id: uuid(), text: "play fetch", isComp: false }
];

const App: React.FC = () => {
  return (
    <div>
      <List name="oz" age={1} person={{ name: "oz", age: "12" }} />
      {todos.map(item => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default App;
