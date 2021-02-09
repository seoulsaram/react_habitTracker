import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        //state object 안에 있는 count를 증가한 뒤 state를 업데이트 해야 함.
        this.setState({count: this.state.count + 1});
        //this.state.count += 1;
        //이렇게 하면 해당 오브젝트가 업데이트 됐는지 리액트가 모른다.
    };
    render() {
        return (
           <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease">
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete">
                <i className="fas fa-trash"></i>
            </button>
           </li>
        );
    }
}

export default Habit;