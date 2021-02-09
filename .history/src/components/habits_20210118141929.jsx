import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state ={
        habits: [
            {name : 'Reading', count: 0},
            {name : 'Running', count: 0},
            {name : 'Coding', count: 0},
        ],
        soul: 'pure',
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                <Habit habit={habit}/>))}
                {/* habit이라는 prop이름에 각각의 habit을 전달해줄거야. */}
            </ul>
        );
    }
}

export default Habits;