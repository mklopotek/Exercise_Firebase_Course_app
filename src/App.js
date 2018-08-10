import React, { Component } from 'react'
import Counter from './Counter'
import RandomUsers from './RandomUsers'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path={'/'} exact component={Counter} />
            <Route path={'/random-users'} exact component={RandomUsers} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
