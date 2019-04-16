import React from 'react';
import { ReactComponent as AvatarLogo } from '../asset/rocket.svg';
import '../styles/Avatar.css'

const Avatar = ()=>{
    return(
        <div className="avatar">
            <AvatarLogo className="AvatarLogo"/>
        </div>
    )
}

export default Avatar;