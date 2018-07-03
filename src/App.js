import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Counter />
      </div>
    );
  }
}

export default App;
