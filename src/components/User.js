import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [counter] = useState(0);
  const [counter2] = useState(1);
  return (
    <div className="user-card">
      <h1>Name:{name}</h1>
      <h2>location:{location}</h2>
      <h2>contact: {contact}</h2>
      <h2>counter: {counter}</h2>
      <h2>counter2: {counter2}</h2>
    </div>
  );
};

export default User;
