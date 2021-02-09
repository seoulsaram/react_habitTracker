import React, { Component } from "react";

class HabitAddForm extends Component {
  onSubmit = (event) => {
    console.log("submit!");
  };
  render() {
    return (
      <form className="add-form" onSubmi={this.onSubmit}>
        <input type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
