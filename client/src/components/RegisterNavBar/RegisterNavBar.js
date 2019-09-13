import React from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterNavBar() {
  return (
      <Navbar className="navbar" expand="lg" fixed="top" style={{backgroundImage: "linear-gradient( #F8B195, #F67280, #C06C84, #6C5B7B, #355C7D)"}}>
      <DropdownButton 
      id="dropdown-item-button" 
      title="Language" style={{color: "white"}}>
        <Dropdown.Item as="button">English</Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/italianhome">Italiano</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/arabichome">عربي</Link></Dropdown.Item>
      </DropdownButton>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{ width: "8rem" }}><Link to="/" style={{color: "white"}}>Home</Link></Nav.Item>
          <Nav.Item style={{ width: "8rem" }}><Link to="/login" style={{color: "white"}}>Login</Link></Nav.Item>
          {/* <Nav.Item style={{ width: "8rem" }}><Link to="/register" style={{color: "white"}}>Register</Link></Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RegisterNavBar;