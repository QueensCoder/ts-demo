import { uuid } from "uuidv4";

const ADD_TODO: action = "ADD_TODO";
const COMPLETE_TODO: action = "COMPLETE_TODO";

export const addTodo: addTodo = text => ({ type: ADD_TODO, text });
export const completeTodo: completeTodo = todo => ({
  type: COMPLETE_TODO,
  todo
});

const reducer = (state, { type, title, author, id }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, { title, author, id: uuid() }];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== id);
    default:
      return state;
  }
};

export default reducer;
