import React from 'react';
import avatarUrl from '../assets/avatar.jpg';

const Header = () => {
    return (
        <div className="header">
            <img className="pic" src={avatarUrl} alt="avatar"></img>
            <h1>Hello,</h1>
            <h2>My name is Kamil 24yo and this is my resume/cv</h2>
        </div>
    )
}


export default Header;