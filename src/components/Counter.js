import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter1: 0,
            counter2: 0
        }

        this.increaseOne = this.increaseOne.bind(this);
        this.increaseTwo = this.increaseTwo.bind(this);
        this.decreaseOne = this.decreaseOne.bind(this);
        this.decreaseTwo = this.decreaseTwo.bind(this);
        this.reset = this.reset.bind(this);

    }
    increaseOne() {
        this.setState({
            counter1: this.state.counter1 + 1
        })
    }

    increaseTwo() {
        this.setState({
            counter2: this.state.counter2 + 1
        })
    }

    decreaseOne() {
        const counter = this.state.counter1;
        if(counter === 0){
            return false;
        } else {
            this.setState({
                counter1: this.state.counter1 - 1
            })
        }
    }
    decreaseTwo() {
        const counter = this.state.counter2;
        if(counter === 0){
            return false;
        } else {
            this.setState({
                counter2: this.state.counter2 - 1
            })
        }
    }

    reset() {
        if(this.state.counter1 === 0 && this.state.counter2 === 0) {
            return false;
        } else {
            this.setState({
                counter1: 0,
                counter2: 0
            })
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Simple Counter
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm">
                            <h1>Total: {this.state.counter1}</h1>
                            <a href="#" className="btn btn-primary" id="inc-btn-one" onClick={this.increaseOne}>Increase</a>
                            <a href="#" className="btn btn-primary" id="dec-btn-one" onClick={this.decreaseOne}>Decrease</a>
                        </div> 
                        <div className="col-sm">
                            <h1>Total: {this.state.counter2}</h1>
                            <a href="#" className="btn btn-primary" id="inc-btn-two" onClick={this.increaseTwo}>Increase</a>
                            <a href="#" className="btn btn-primary" id="dec-btn-two" onClick={this.decreaseTwo}>Decrease</a>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary" onClick={this.reset}>Reset</a>
                </div>    
            </div>
        );
    }
}

export default Counter;