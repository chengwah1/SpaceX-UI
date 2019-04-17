import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Component
import Test from './Test';
import Login from './Login';
import '../styles/App.css';

class App extends Component {
<<<<<<< HEAD
  state = {
    username:'',
    password:'',
    isLogin:false
  }
=======
>>>>>>> parent of abf7a9f... added 404 page for non specified route
  render() {
    return (
      <BrowserRouter>
        <div className="App">
<<<<<<< HEAD
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/test" component={Test}/>
            <Route component={NotFound}/>
          </Switch>
=======
          <Route exact path="/" component={Login}/>
          <Route path="/test" component={Test}/>
>>>>>>> parent of abf7a9f... added 404 page for non specified route
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
