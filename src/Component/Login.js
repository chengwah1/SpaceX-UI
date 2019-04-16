import React from 'react';

// antd
import { Button } from 'antd';
import { Input } from 'antd';
import { Divider } from 'antd';

// Components
import LoginFormHeader from './LoginFormHeader';

const Login = ()=>{
    return(
        <div className="LoginCSS">
            <Divider/>
            <LoginFormHeader />
            <Divider/>
            <Input placeholder="Username" />
            <Input.Password placeholder="input password" />
            <Button type="primary">Login</Button>
        </div>
    )
}

export default Login;