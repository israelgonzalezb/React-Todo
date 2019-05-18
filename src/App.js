import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      task: "",
      id: null,
      completed: false
    };
  }

  changeHandler = e => {
    this.setState({ task: e.target.value });
  };

  addNote = e => {
    e.preventDefault();
    let newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
    this.setState({ task: "" });
  };

  clearAll = e => {
    this.setState({
      list: this.state.list.filter(x => {
        console.log(x);
        return x.completed === false;
      })
    });
  };

  taskCompleted = id => {
    this.setState({
      list: this.state.list.map(task => {
        if (id === task.id) {
          return { ...task, completed: !task.completed };
        }
        console.log(this.state.list);
        return task;
      })
    });
  };

  deleteTask = id => {
    this.setState({
      list: this.state.list.filter(x => {
        return x.id !== id;
      })
    });
  };

  render() {
    let count = this.state.list.length;
    let progress = this.state.list.filter(x => {
      return x.completed === true;
    }).length;
    return (
      <div className="panel">
        <h1 className="title is-1">Reactodo</h1>
        <progress
          class="progress is-info"
          value={(progress / count) * 100}
          max="100"
        />
        <TodoList
          count={this.state.list.length}
          notes={this.state.list}
          taskCompleted={this.taskCompleted}
          delete={this.deleteTask}
        />
        <TodoForm
          onSubmit={this.addNote}
          onChange={this.changeHandler}
          clear={this.clearAll}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
