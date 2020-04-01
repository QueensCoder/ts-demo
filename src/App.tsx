import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <List name="oz" age={1} />
    </div>
  );
};

export default App;
