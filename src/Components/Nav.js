import React from 'react';
import Logo from '../Assets/shamazon-logo.png';
import './../Styles/Nav.scss';

function Nav() {
    return (
        <nav className="navBar">
        {/*  logo on left */}
        <img className="navBar__logo" 
        src={Logo} 
        alt=""/>
        {/* search box */}
        
        {/* <input></input> */}
        {/*  3 links */}
        {/* basket with number */}
        </nav>
    )
}

export default Nav
