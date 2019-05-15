// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      notes: this.props.notes
    };
  }
  render() {
    return (
      <div>
        There are {this.props.count} notes{" "}
        {this.props.notes.map(x => (
          <div>
            <Todo note={x} />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
