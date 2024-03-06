import React from "react";

export default function ToDoItem(props) {
  return (
    <div>
      <li>{props.text}</li>
    </div>
  );
}
