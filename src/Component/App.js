import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component
import Test from './Test';
import Login from './Login';
import NotFound from './NotFound';
import '../styles/App.css';

import SpaceX from './SpaceX.js'

class App extends Component {
  state = {
    username:'ppp',
    password:'',
    isLogin:false,
  }
  toggleLogin=()=>{
    this.setState(prevState=>({isLogin:!prevState.isLogin}))
  }
  setUserName=(usernameinput)=>{
    this.setState({username:usernameinput})
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={({history})=><Login history={history} 
            LoginStatus = {this.state.isLogin} 
            toggleLogin={this.toggleLogin}
            setUserName={this.setUserName} />}/>
            
            
            <Route exact path={`/${this.state.username}`} render={({history})=><SpaceX
            history={history}
            LoginStatus = {this.state.isLogin} 
            toggleLogin={this.toggleLogin}
            setUserName={this.setUserName} />}/>
            
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
