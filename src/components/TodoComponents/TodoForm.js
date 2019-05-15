import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="newTodo"
            placeholder="Enter a task"
            onChange={this.props.onChange}
          />
          <button type="button" onClick={this.props.onSubmit}>
            Add Task
          </button>
          <button type="button" onClick={this.props.clear}>
            Clear all
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
