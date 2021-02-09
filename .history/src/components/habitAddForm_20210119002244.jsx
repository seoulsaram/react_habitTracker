import React, { Component } from "react";

class HabitAddForm extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    console.log("submit!");
    //form태그를 사용해서 서밋을 하면 브라우저가 새로고침되는데, 이걸 방지하는 코드.
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
