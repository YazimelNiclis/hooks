import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NameStorage = () => {
  const [name, setName] = useLocalStorage<string>("user-name", "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
};

export default NameStorage;
