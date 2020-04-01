import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  // type is checked that event comes fomr html input element
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add to List
      </button>
    </form>
  );
};
export default AddTodoForm;
