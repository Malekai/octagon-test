import React, { Component } from 'react';
import logo from '../images/weyland-corp_logo.png';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
    burgerToggle() {
        let links = document.querySelector('.narrow-links');
        
        if (links.style.display === 'block') {
            links.style.display = 'none';
        } else {
            links.style.display = 'block';
        }
    }

    render() {
        return (
            <Navbar className="main-head" inverse collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">
                        <img id="header-logo" src={logo} alt="Weyland Corp logo"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <IndexLinkContainer to="/">
                        <NavItem className="link" eventKey={1}>HOME</NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/contact">
                        <NavItem className="link" eventKey={2}>CONTACT</NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
