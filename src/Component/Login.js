import React, { Component } from 'react';
import Form from './Form';
// antd
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
            <Form/>
        </div>
    )
}

export default Login;