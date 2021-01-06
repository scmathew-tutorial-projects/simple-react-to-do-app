import React from "react";
import ToDo from "./ToDo.js";

function ToDoList(props) {
  return props.tasks.map((task, i) => {
    return <ToDo key={i} value={task} onClick={() => props.onClick(i)} />;
  })
}

export default ToDoList;
