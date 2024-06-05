import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div class="topnav">
            <a class="active" href="/home">Home</a>
            {/* <a href="/message">message's <sup style={{backgroundColor:"red", padding:"0px 1px"}}>0</sup> </a> */}
            <a href="/notification">Notification's <sup style={{backgroundColor:"red", padding:"0px 1px"}}>0</sup> </a>
            <a href="/schoools">School's list</a>
            <a href="/id" className='id'>Id</a>
            <a href="/profile">Profile</a>
        </div>
    );
};

export default Header;