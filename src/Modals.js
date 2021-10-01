import React from "react";

export default class Modals extends React.Component {
  render() {
    return (
      <div
        id="modal"
        className="d-flex v-hidden p-fixed align-center justify-center back-animation"
      >
        <div className="d-flex flex-d-col modals align-center justify-center ">
          <button className="exit" onClick={() => this.props.toggle()}>
            <i class="far fa-window-close fa-2x"></i>
          </button>
          <h3>Edit Title</h3>
          <input id="title" type="text"></input>
          <h4>Edit Body</h4>
          <input id="body"></input>
          <button onClick={() => this.props.editSave(this.props.id)}>
            <i class="far fa-save fa-4x"></i>
          </button>
        </div>
      </div>
    );
  }
}
