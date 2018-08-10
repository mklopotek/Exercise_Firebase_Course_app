import React, { Component } from 'react';
import Counter from './Counter'
import UserRandom from './UserRandom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <UserRandom />
      </div>
    );
  }
}

export default App;
