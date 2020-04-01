import React from "react";

import { List, TodoListItem } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <List name="oz" age={1} person={{ name: "oz", age: "12" }} />
      <TodoListItem todo={"x"} isCompleted={false} />
    </div>
  );
};

export default App;
