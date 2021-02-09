import "./app.css";
import React, { Component } from "react";
import Habits from "./components/habits";
//이걸 컴포넌트로 바꿔서 화면 완성해보기

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <span>Habit Tracker</span>
          <span className="navbar-count"></span>
        </nav>
        <Habits />
      </div>
    );
  }
}

export default App;
