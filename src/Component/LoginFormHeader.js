import React from 'react';

// antd
import { Avatar } from 'antd';

// css
import '../styles/LoginFormHeader.css'
import '../styles/Avatar.css'

const LoginFormHeader = ()=>{
    return(
        <div className="LoginFormHeaderCSS">
            <Avatar className="avatarcss" shape="square" size="large" icon="rocket"/>
            <div className="LoginFormHeaderText">SpaceX Rockets</div>
        </div>
    )
}

export default LoginFormHeader;