import React, { useEffect } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useGlobalContext } from '../context';

const Header = () => {

    const { state } = useGlobalContext();

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href='#'> MyApp </Navbar.Brand>
                <NavbarCollapse>
                    <Nav className='me-auto'>
                        <Link to="/">Home</Link>
                        {/* <NavLink href='#'>Home</NavLink>
                        <NavLink href='#'>About</NavLink>
                        <NavLink href='#'>Contact Us</NavLink> */}
                    </Nav>
                    <Nav>
                        <Link to="/cart">Cart <strong>({ state.cart.length })</strong></Link>
                        {/* <NavLink href='/cart'>Cart <strong>({ state.cart.length })</strong></NavLink> */}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default Header;
