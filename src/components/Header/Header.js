import React from 'react'
import "./Header.css"
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import "./Header.css"
import { List } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="header-main">
  <Container>
  <Navbar.Brand href="#home"> <List size={30} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <h5 className="h5"><span style={{color:"orange"}}>ontime</span>services</h5>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><Twitter size={20} /></Nav.Link>
      <Nav.Link href="#deets"><Facebook size={20} /></Nav.Link>
      <Nav.Link href="#deets"><Instagram size={20} /></Nav.Link>
      <Nav.Link href="#deets"><Person size={25} /></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
