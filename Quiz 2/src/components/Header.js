import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar expand="lg" className="bg-light text-black">
            <Container>
                <Navbar.Brand className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/"}>
                <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bakery-shop-logo-design-template-949f360044ad633bf4650c6c46b6dbce_screen.jpg?ts=1659430097"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
                     </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav bar-nav text-black" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={"text-black"}> Home </Nav.Link>
                        <Nav.Link className={"text-black"} href="#link">Menu</Nav.Link>
                        <Nav.Link className={"text-black"} href="#link">About Us</Nav.Link>
                        <Nav.Link className={"text-black"} href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
