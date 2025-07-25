import React from "react";
import "../../styles/HeaderStyle.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="logo">
                        <img src={Logo} alt="Logo" className="img-fluid" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/menu">
                                Our Menu
                            </Nav.Link>
                            <Nav.Link as={Link} to="/shop">
                                Shop
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blog">
                                Blog
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" className="cart">
                                <div style={{position: "relative", display: "inline-block"}}>
                                    <i className="bi bi-bag fs-5"></i>
                                    <em className="roundpoint">2</em>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
