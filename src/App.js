import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test me I say!</h1>
        </header>
        <p className="App-intro">
          blip blip blip <code>reactreact</code> frrrp frrrp frrrp
        </p>
      </div>
    );
  }
}

export default App;
