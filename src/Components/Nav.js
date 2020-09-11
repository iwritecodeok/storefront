import React from 'react';
import Logo from '../Assets/shamazon-logo.png';
import './Nav.css';

function Nav() {
    return (
        <nav className="navBar">
        {/*  logo on left */}
        <img className="navBar__logo" 
        src={Logo} 
        alt=""/>
        {/* search box */}
        {/*  3 links */}
        {/* basket with number */}
        </nav>
    )
}

export default Nav
