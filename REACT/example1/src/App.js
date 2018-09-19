import React, { Component } from 'react';
import Input from './Input';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="whole">
        <Nav />
        <Input />
      </div>
    );
  }
}

export default App;
