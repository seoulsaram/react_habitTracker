import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from './components/navbar';
//이걸 컴포넌트로 바꿔서 화면 완성해보기

class App extends Component {
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
    //전체 배열을 복사해서 새로운 변수에 넣고
    const index = habits.indexOf(habit);
    //받아온 인덱스번호를 해빗츠 인덱스번호로 넣은뒤

    //<내코드>
    // if (habits[index].count <= 0) {
    //   return;
    // } else {
    //   habits[index].count--;
    // }

    //<엘리쌤코드>
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
    //변경한 count값을 가진 habits배열을 state에 set해주는데
    //이때의 배열 이름은 원본과 동일하게 해준다.
  };

  handleDelete = (habit) => {
    //<내코드>
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);

    //<샘코드>
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    //id가 같지 않은것만 필터로 보여주기
    this.setState({ habits: habits });
  };

  render() {
    return (
      <Navbar/>
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default App;
