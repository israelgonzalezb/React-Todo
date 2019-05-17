// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      notes: this.props.notes,
      taskCompleted: this.props.taskCompleted
    };
  }
  taskComplete = () => {
    console.log("clicked"); //move this to App.js
  }
  render() {
    return (
      <div>
        There are {this.props.count} notes
        {this.props.notes.map(x => (
            <Todo note={x} taskComplete={this.state.taskCompleted}/>
        ))}
      </div>
    );
  }
}

export default TodoList;
