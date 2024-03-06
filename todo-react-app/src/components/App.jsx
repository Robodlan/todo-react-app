import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prev) => {
      return [...prev, inputText];
    });
  }

  function deleteItems(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onChange={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoItem
                onCheck={deleteItems}
                key={uuidv4()}
                id={index}
                text={todoItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
