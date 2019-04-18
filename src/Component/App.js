import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component
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
  setUserInfo=(userInfo)=>{
    this.setState({username:userInfo.userName,
                  password:userInfo.userPass},
                  ()=>{
                    console.log(userInfo)
                    localStorage.setItem('userInfo', JSON.stringify(userInfo));
                  }
                  )
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={({history})=><Login history={history} 
            LoginStatus = {this.state.isLogin} 
            toggleLogin={this.toggleLogin}
            setUserInfo={this.setUserInfo}
            stateUserName={this.state.username} />}/>
            
            
            <Route exact path={`/${this.state.username}`} render={({history})=><SpaceX
            history={history}
            LoginStatus = {this.state.isLogin} 
            toggleLogin={this.toggleLogin}
            setUserInfo={this.setUserInfo} />}/>
            
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
