import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Component
import Test from './Test';
import Login from './Login';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/test" component={Test}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
