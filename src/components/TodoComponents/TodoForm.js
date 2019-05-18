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
          <p class="control has-icons-left">
            <input
              className="input is-small"
              type="text"
              name="newTodo"
              placeholder="Enter a task"
              onChange={this.props.onChange}
              value={this.props.task}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-pencil-alt" aria-hidden="true" />
            </span>
          </p>
          <div className="field is-grouped">
            <button
              type="button"
              className="button is-link is-outlined is-fullwidth"
              onClick={this.props.onSubmit}
            >
              Add Task
            </button>
            <button
              type="button"
              className="button is-danger is-outlined is-fullwidth"
              onClick={this.props.clear}
            >
              Clear Completed
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
