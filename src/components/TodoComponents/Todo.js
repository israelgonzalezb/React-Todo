import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note,
      task: props.note.task,
      id: props.note.id,
      completed: props.note.completed
    };
  }
  render() {
    return (
      <div style={{textDecoration: this.state.completed && "line-through"}}>
        <div>Todo #{this.state.id}</div>
        <div>{this.state.task}</div>
      </div>
    );
  }
}

export default Todo;
