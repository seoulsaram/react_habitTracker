import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
           <>
            <span className="habit-name">Reading</span>
            <span className="habit-count"></span>
           </>
        );
    }
}

export default Habit;