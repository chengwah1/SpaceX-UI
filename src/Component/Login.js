import React from 'react';

// antd
import { Button } from 'antd';
import { Input } from 'antd';
import { Divider } from 'antd';


// Components
import LoginFormHeader from './LoginFormHeader';

// Style
import '../styles/Login.css'

const Login = ()=>{
    return(
        <div className="LoginCSS">
            <Divider/>
            <LoginFormHeader />
            <Divider/>
            <Input className="usernameInputbox" placeholder="Username" />
            <Input.Password className="passwordInputbox" placeholder="input password" />
            <Button className="loginButton" type="primary" block>Login</Button>          
        </div>
    )
}

export default Login;