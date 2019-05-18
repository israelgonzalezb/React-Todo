import React from "react";

const Todo = (props) => {
  const note = props.note;
    return (
      <div>
      <div>
        <label className="panel-block">
          
         <input type="checkbox" onClick={() => props.taskComplete(note.id)}/>
         <span className={note.completed ? "completed" : ""}>
          {note.task+" "} 
          </span>
          &ensp;
          <button className="delete is-small" onClick={() => props.delete(note.id)}></button>
          

        </label>
        
      </div>
                
      </div>
    );
  }

export default Todo;
