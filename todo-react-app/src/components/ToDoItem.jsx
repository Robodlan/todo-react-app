import React from "react";

export default function ToDoItem(props) {
    return (
        <div onClick={()=> {
            return props.onCheck(props.id)
        }} >
            <li>{props.text}</li>
        </div>
    )
}