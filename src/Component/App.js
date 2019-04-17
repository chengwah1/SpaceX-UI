import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component
import Test from './Test';
import Login from './Login';
import NotFound from './NotFound';
import '../styles/App.css';

class App extends Component {
  state = {
    username:'',
    password:'',
    isLogin:false
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/test" component={Test}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
