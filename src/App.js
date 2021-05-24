import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Counter from './components/Counter';

class App extends Component { 
  constructor(){
    super();

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
      <div>
        <Navbar />
        <Counter increaseOne={this.increaseOne} increaseTwo={this.increaseTwo} decreaseOne={this.decreaseOne} decreaseTwo={this.decreaseTwo} reset={this.reset} counter1={this.state.counter1} counter2={this.state.counter2}/>
      </div>
    );
  }
}

export default App;
