import React from 'react';
import DatePicker from 'antd/lib/date-picker';

// Components
import LoginFormHeader from './LoginFormHeader';

const Login = ()=>{
    return(
        <div>
            <LoginFormHeader />
            This is login page
            <DatePicker />
        </div>
    )
}

export default Login;