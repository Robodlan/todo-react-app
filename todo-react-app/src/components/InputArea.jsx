import React, { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onChange(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
