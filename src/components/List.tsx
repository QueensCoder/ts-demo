import React from "react";
export interface HelloProps {
  name: string;
  age: number;
}
const List: React.FC<HelloProps> = ({ name, age }) => {
  return (
    <div>
      hello {name} you are {age} years old{" "}
    </div>
  );
};

export default List;
