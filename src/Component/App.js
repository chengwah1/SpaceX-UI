import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component
import Test from './Test';
import Login from './Login';
import NotFound from './NotFound';
import '../styles/App.css';

class App extends Component {
  state = {
    username:'ppp',
    password:'',
    isLogin:false,
  }
  toggleLogin=()=>{
    this.setState(prevState=>({isLogin:!prevState.isLogin}))
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={({history})=><Login history={history} 
            LoginStatus = {this.state.isLogin} 
            toggleLogin={this.toggleLogin}/>}/>
            
            <Route exact path={`/${this.state.username}`} component={Test}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
