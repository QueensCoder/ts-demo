import React, { useState } from "react";

interface formProps {
  text: string;
}

const Form: React.FC = () => {
  const [todo, setTodo] = useState<formProps>();
  const [user, setUser] = useState<formProps>();
  return (
    <div>hi</div>
    // <div>
    //   <form action="">
    //     <input type="text" onChange={e: React.ChangeEvent<HTMLInputElement> => setTodo(e.target.value)} />
    //     <input type="text" onChange={e => setUser(e.target.value)} />
    //     <button onSubmit={e => e.preventDefault()}>Add To List</button>
    //   </form>
    // </div>
  );
};
export default Form;
