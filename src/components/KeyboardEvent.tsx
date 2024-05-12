import { useState } from "react";
import useKeyboardEvent from "../hooks/useKeyboardEvent";

const KeyboardEvent = () => {
  const [message, setMessage] = useState(
    "Press 'Enter' to change this message"
  );

  const handleEnterPress = (event: KeyboardEvent) => {
    console.log(event);
    setMessage("Enter key was pressed!");
  };

  useKeyboardEvent("Enter", handleEnterPress);

  return <div>{message}</div>;
};

export default KeyboardEvent;
