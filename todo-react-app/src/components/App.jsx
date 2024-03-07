import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from 'uuid';
import InputTextArea from "./InputTextArea";

function App() {
const [items, setItems] = useState([]);



  function addItem(inputText) {
    setItems(prev => {
      return [...prev, inputText]
    });
    
  }

  function deleteItems(id) {
    setItems(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>compra del supermercado</h1>
      </div>
      <InputTextArea onChange={addItem} />

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
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s