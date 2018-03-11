import React, { Component } from 'react';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { time: 0 };
        this.started = true;
    }

    startTimer() {
        if (this.started) {
            this.started = !this.started;
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
    }

    stopTimer() {
        this.started = true;
        clearInterval(this.timerID)
    }

    resetTimer() {
        this.started = true;
        clearInterval(this.timerID);
        this.setState({
            time: 0
        })
    }

    tick() {
        this.setState({
            time: this.state.time + 1
        });
    }
    render() {
        return (
            <div>
                <div className="Clock">
                    <h2>--{this.state.time}--</h2>
                </div>
                <div className="controls">
                    <button className="btn btn-primary" onClick={this.startTimer.bind(this)}>Start</button>
                    <button className="btn btn-danger" onClick={this.stopTimer.bind(this)}>Stop</button>
                    <button className="btn btn-sucess" onClick={this.resetTimer.bind(this)}>Reset</button>
                </div>
            </div>
        );
    }
}
