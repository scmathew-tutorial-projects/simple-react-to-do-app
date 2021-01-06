import React from "react";
import './App.css';
import AddToDoForm from "./components/AddToDoForm";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  handleSubmit(task) {
    let newTasksList = this.state.tasks.slice();
    newTasksList.push(task);
    this.setState({
      tasks: newTasksList
    })
  }

  handleClick(taskIndex) {
    let taskListCopy = this.state.tasks.slice();
    taskListCopy.splice(taskIndex, 1);
    this.setState({
      tasks: taskListCopy
    })
  }

  render() {
    return (
      <>
        <h1 className="main-title">To Do App</h1>
        <ToDoList 
        tasks={this.state.tasks} 
        onClick={(taskIndex) => this.handleClick(taskIndex)}/>
        <AddToDoForm handleSubmit={(task) => this.handleSubmit(task)}/>
      </>
    );
  }
}

export default App;
