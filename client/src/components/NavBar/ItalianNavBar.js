import React from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
      <Navbar style={{backgroundColor: "transparent"}} className="navbar" expand="lg" fixed="top">
      <DropdownButton 
      id="dropdown-item-button" 
      title="Lingua" style={{color: "white"}}>
        <Dropdown.Item as="button">English</Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/italianhome">Italiano</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/arabichome">عربي</Link></Dropdown.Item>
      </DropdownButton>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{ width: "8rem" }}><Link to="/" style={{color: "white"}}>Home</Link></Nav.Item>
          <Nav.Item style={{ width: "8rem" }}><Link to="/login" style={{color: "white"}}>Accesso</Link></Nav.Item>
          <Nav.Item style={{ width: "8rem" }}><Link to="/register" style={{color: "white"}}>Iscrivere</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;