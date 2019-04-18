import React, { Component } from 'react';

// antd
import { Button } from 'antd';
import { Input } from 'antd';
import { Divider } from 'antd';


// Components
import LoginFormHeader from './LoginFormHeader';

// Style
import '../styles/Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
      }

    handleSubmit=(e)=>{
        e.preventDefault();
        // get user input
        let userName = this.username.state.value;
        let userPass = this.password.value;
        let userInfo = {userName:userName,userPass:userPass}
        this.props.setUserInfo(userInfo);
        
        // change URL
        let path = `${userName}`;
        this.props.history.push(path);
        this.props.toggleLogin()
    }

    render(){
    return(
        <div className="LoginCSS">
            <Divider  className="divider"/>
            <LoginFormHeader />
            <Divider className="divider"/>
            <form onSubmit={this.handleSubmit}>
            <Input className="usernameInputbox" placeholder="Username" ref = {(input) =>this.username=input}/>
            <input type="password" className="passwordInputboxs" placeholder="Input password" minlength="8" required ref = {(input) =>this.password=input}/>
            <Button className="loginButton" htmlType="submit" type="primary" block value="Submit">Login</Button>
            </form>        
        </div>
    )
    }
}

export default Login;