import React, { useState } from "react";

interface Person {
  name: string;
  age: string;
}

interface ListProps {
  name: string;
  age: number;
  person: Person; //   can set type of object using another interface
  ok?: boolean; //? makes prop optional
}

const List: React.FC<ListProps> = ({ age, person, name }) => {
  return (
    <div>
      <div>
        hello {name} you are {age} years old
        <br />
        hello {person.name} {person.age}
      </div>
      <br />
    </div>
  );
};

export default List;
