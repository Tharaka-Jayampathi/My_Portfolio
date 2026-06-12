import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">TJ.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto tabs">
            <Nav.Link as={Link} to="home" spy={true} smooth={true} offset={-50} duration={400} activeClass="active" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={-50} duration={400} activeClass="active" className="nav-item">About</Nav.Link>
            <Nav.Link as={Link} to="projects" spy={true} smooth={true} offset={-50} duration={400} activeClass="active" className="nav-item">Projects</Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={-50} duration={400} activeClass="active" className="nav-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}