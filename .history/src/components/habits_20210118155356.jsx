import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    //...는 위에 스테이트의 habits배열을 새로운 배열로 복사해오는 것임
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
    //새로운 오브젝트를 만들어서 key를 habits로 주고 value는 위에서 const = habits해준 habits를 넣었다.
    //이렇게 key:val 이름이 같을 때는 {habits} 하나만 써줘도 됨.
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index] = habits.count--;
    this.setState({ habits });
    //console.log(this.state.habits[0].name);
  };

  handleDelete = (habit) => {
    console.log(`delete ${habit.name}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        ))}
        {/* habit이라는 prop이름에 각각의 habit을 전달해줄거야. */}
      </ul>
    );
  }
}

export default Habits;
