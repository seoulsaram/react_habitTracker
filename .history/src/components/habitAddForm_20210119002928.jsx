import React, { Component } from "react";
import Habit from "./habit";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  //오브젝트타입.

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //form태그를 사용해서 서밋을 하면 브라우저가 새로고침되는데, 이걸 방지하는 코드.
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
