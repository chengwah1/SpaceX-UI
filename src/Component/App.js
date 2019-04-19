import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component
import Login from './Login';
import NotFound from './NotFound';


import SpaceX from './SpaceX.js'

class App extends Component {
  state = {
    username:'',
    password:'',
    isLogin:false,
  }
  componentDidMount=()=>{
    let storage_userinfo =JSON.parse(window.localStorage.getItem('userInfo'));
    if(storage_userinfo){
      console.log(storage_userinfo)
      this.setState({username:storage_userinfo.userName,
      password:storage_userinfo.userPass,
      isLogin:true
    })}
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
                  })
  }
  clearUserInfo=()=>{
    this.setState({username:'',password:''})
    if (this.state.isLogin===true) this.toggleLogin();
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
            clearUserInfo={this.clearUserInfo} />}/>
            
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
