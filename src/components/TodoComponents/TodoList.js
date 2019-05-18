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
        {this.props.count!==1 ? "There are " +  this.props.count + " notes" : "There is 1 note"}
        {this.props.notes.map(x => (
            <Todo note={x} taskComplete={this.state.taskCompleted} delete={this.props.delete}/>
        ))}
      </div>
    );
  }
}

export default TodoList;
