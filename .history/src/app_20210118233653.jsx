import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
//이걸 컴포넌트로 바꿔서 화면 완성해보기

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleReset = () => {};

  render() {
    return (
      <div>
        <nav className="navbar">
          <span>Habit Tracker</span>
          <span className="navbar-count"></span>
        </nav>
        <div className="habits">
          <form className="add-form">
            <input type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
          </form>
          <Habits />
          <button className="habits-reset" onClick="handleReset">
            Reset All
          </button>
        </div>
      </div>
    );
  }
}

export default App;
