import React from "react";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalClass: this.props.modalClass};
    this.activateModal = this.activateModal.bind(this);
  }
  
  activateModal(id) {
    this.props.toggleModal(this.props.note.id);
    this.setState({modalClass: this.props.modalClass})
    console.log("wtf!!");
  }

  render() {
    let note = this.props.note;
    let activeModalId = this.props.activeModalId;
    let modalClass = this.state.modalClass;
    let toggleModal = this.props.toggleModal;

    return (
      <div className={modalClass}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.activateModal}
            />
          </header>
          <section className="modal-card-body">{note.task}</section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button" onClick={this.activateModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default EditTodo;
