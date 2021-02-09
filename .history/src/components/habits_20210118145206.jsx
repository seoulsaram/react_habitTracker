import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state ={
        habits: [
            {id : 1, name : 'Reading', count: 0},
            {id : 2, name : 'Running', count: 0},
            {id : 3, name : 'Coding', count: 0},
        ],
    };

    handleIncrement = (habit) => {
        //state object 안에 있는 count를 증가한 뒤 state를 업데이트 해야 함.
        //this.state.count += 1;
        //이렇게 하면 해당 오브젝트가 업데이트 됐는지 리액트가 모른다.
    };

    handleDecrement = (habit) => {

    };

    handleDelete = (habit) => {

    }

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                <Habit key={habit.id} habit={habit}/>))}
                {/* habit이라는 prop이름에 각각의 habit을 전달해줄거야. */}
            </ul>
        );
    }
}

export default Habits;