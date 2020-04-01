type Todo = {
  text: string;
  isComp: boolean;
  id: string;
};

type ToggleTodo = (selectedTodo: Todo) => void; //toggle todos type is set here

type AddTodo = (newTodo: string) => void;
