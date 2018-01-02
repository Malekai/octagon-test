import React from 'react';
import logo from '../images/weyland-corp_logo.png';

const Footer = () => {
    return (
        <footer className="main-footer">
            <img id="footer-logo" src={logo} alt="small footer weyland logo"/>
            <small>&copy; Copyright 2023, Weyland Corporation</small>
        </footer>
    );
}

export default Footer;
