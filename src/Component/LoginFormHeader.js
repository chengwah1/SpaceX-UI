import React from 'react';

// antd
import { Avatar } from 'antd';

// css
import '../styles/LoginFormHeader.css'

const LoginFormHeader = ()=>{
    return(
        <div className="LoginFormHeaderCSS">
            <Avatar size={50} icon="rocket" />
            <Avatar shape="square" size={64} icon="rocket" />
            <div className="LoginFormHeaderText">SpaceX Rockets</div>
        </div>
    )
}

export default LoginFormHeader;