type action = string;
type addTodo = (text: string) => { type: string; text: string };
type completeTodo = (todo: Object) => { type: string; todo: Object };
