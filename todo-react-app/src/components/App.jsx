import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return <ToDoItem key={index} id={index} text={todoItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}
