import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Glyphicon,
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap';
import './NavMenu.css';

export default props => (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>CartPlus</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='apple' /> Products
                    </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/cart'}>
                            <NavItem>
                                <Glyphicon glyph='shopping-cart' /> Cart
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
