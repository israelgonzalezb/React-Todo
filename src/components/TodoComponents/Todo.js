import React from "react";

const Todo = (props) => {
  const note = props.note;
    return (
      <div>
      <div
       className={note.completed ? "completed" : ""}
       onClick={() => props.taskComplete(note.id)}>
        <div>Todo #{note.id}</div>
        <div>
          {note.task+" "} 

        </div>
        
      </div>
                <button type="button">Delete</button>
      </div>
    );
  }

export default Todo;
