import React, { Component } from 'react';
import './App.css';
import SimpsonsQuote from './components/SimpsonsQuote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpsonsQuote />
      </div>
    );
  }
}

export default App;
