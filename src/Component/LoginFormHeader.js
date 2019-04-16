import React from 'react';
import Avatar from './Avatar'

// css
import '../styles/LoginFormHeader.css'

const LoginFormHeader = ()=>{
    return(
        <div className="LoginFormHeaderCSS">
            <Avatar/>
            <div className="LoginFormHeaderText">SpaceX Rockets</div>
        </div>
    )
}

export default LoginFormHeader;