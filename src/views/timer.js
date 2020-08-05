import React from 'react';
import Header from '../layout/header';

class Clock extends React.Component {

    // Classes ever need call constructor with props
    // State is private fully controlled by component
    constructor(props) {
        super();
        // Only here can be state changed diretly
        this.state = { date: new Date() };
    }

    // Called after component mounted
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    // Called before component destroyed
    componentWillUnmount() {
        clearInterval(this.timerId);
    }


    tick() {
        // SetState renders the component again
        // This action call de componentWillUnmount
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

function Timer() {
    return <Clock />;
}


export default Timer;