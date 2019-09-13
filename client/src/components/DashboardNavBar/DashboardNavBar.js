import React, { Component } from "react";
import { Navbar, Nav, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class DashboardNavBar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <Navbar style={{backgroundImage: "linear-gradient(#F8B195, #F67280, #C06C84, #6C5B7B, #355C7D)"}} className="navbar" expand="lg" fixed="top">
      <DropdownButton 
      id="dropdown-item-button" 
      title="Language" style={{color: "white"}}>
        <Dropdown.Item as="button">English</Dropdown.Item>
        <Dropdown.Item as="button">Español</Dropdown.Item>
        <Dropdown.Item as="button">عربي</Dropdown.Item>
      </DropdownButton>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{ width: "8rem", marginTop: "5px" }}><Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link></Nav.Item>
          <Nav.Item style={{ width: "8rem", marginTop: "5px" }}><Link to="/fragrance" style={{color: "white", textDecoration: "none"}}>Fragrance</Link></Nav.Item>
          <Button 
            onClick={this.onLogoutClick}
            style={{
              width: "7rem",
              backgroundColor: "transparent",
              border: "none"
            }}
          >Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}

DashboardNavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DashboardNavBar);