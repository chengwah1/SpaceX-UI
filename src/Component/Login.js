import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import { Button } from 'antd';

// Components
import LoginFormHeader from './LoginFormHeader';

const Login = ()=>{
    return(
        <div className="LoginCSS">
            <LoginFormHeader />
            This is login page
            <DatePicker />
            <Button type="primary">Primary</Button>
        </div>
    )
}

export default Login;