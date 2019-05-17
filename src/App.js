import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: true
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      task: "",
      id: null,
      completed: false
    };
  }
  /*
  handleAllClicks = (e) => {
    let event = e;
    let targetId = e.target ? e.target.getAttribute('id') : "unknown";
    let filteredList = this.state.list.filter(x=>x.id!=targetId);
    filteredList.length > 0 ? 
  }*/
  
  changeHandler = (e) => {
    this.setState({task: e.target.value})
  }
  
  addNote = (e) => {
    e.preventDefault();
    let newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      list: [...this.state.list,newItem]
    });
    
  }
  
  clearAll = (e) =>{
    this.setState({
      list: this.state.list.filter(x=>{console.log(x);return x.completed==true})
    })
  }
  
  taskCompleted = (id) => {
    this.setState({
      list: this.state.list.map((task)=>{
        if (id === task.id) {
          return {...task, 
                  completed: !task.completed
                 };
        }
        return task;
      })
      
  });
}; 


  
  render() {
    return (
      <div>
        <TodoList count={this.state.list.length} notes={this.state.list} taskCompleted={this.taskCompleted} />
        <TodoForm onSubmit={this.addNote} onChange={this.changeHandler} clear={this.clearAll}/>
        
      </div>
    );
  }
}

export default App;
