import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit:${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    //컴포넌트가 지우기 직전에 호출됨.
    console.log(`habit:${this.props.habit.name} Will unmount`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;

    //habit 오브젝트에 들어있는 속성의 이름을 정확하게 변수이름으로 사용해주면
    //알아서 그 속성이 그 변수로 들어간다. 심지어 위와 같이 여러개의 변수명을 사용해도..짱!
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
