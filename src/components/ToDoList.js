import React from "react";
import ToDo from "./ToDo.js";

class ToDoList extends React.Component {

  render() {
    const tasks = this.props.tasks;
    let items = [];
    tasks.forEach((task, i) => {
        items.push(<ToDo key={i} value={task} onClick={() => this.props.onClick(i)}/>)
    });
    return items;
  }
}

export default ToDoList;
