import React from "react";
import EditTodo from "./EditTodo.js";

const Todo = (props) => {
  const note = props.note;
  const taskComplete = props.taskComplete;
  const toggleModal = props.toggleModal;
  const deleteNote = props.delete;
  const modalClass = props.modalClass;
  const activeModalId = props.activeModalId;
  
    return (
      <div>
      <div>
        <label className="panel-block">

           <input type="checkbox" checked={note.completed} onClick={() => taskComplete(note.id)}/>
           
           <span className={note.completed ? "completed" : ""}>
              {note.task+" "} 
            </span>
            
            &ensp;
            <button 
            className="delete is-small" 
            onClick={() => deleteNote(note.id)}
            >
            </button>
            
            &ensp;
            <a 
             className="button is-small" 
             onClick={() => toggleModal(note.id)}
             >
              <span className="icon is-small">
                <i className="fas fa-pencil-alt"></i>
              </span>
            </a>
            
          </label>
          
        <EditTodo
        note={note} 
        modalClass={modalClass} 
        toggleModal={toggleModal} 
        activeModalId={activeModalId}
        />
        
      </div>
                
      </div>
    );
  }

export default Todo;
