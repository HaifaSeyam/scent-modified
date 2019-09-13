import React, { Component } from "react";
import { Navbar, Nav, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class LoggedinHomeNavBar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push(this.props.location.pathname)
      };

      render() {
        console.log(this.props)
        return (
            <Navbar style={{backgroundColor: "transparent"}} className="navbar" expand="lg" fixed="top">
            <DropdownButton 
            id="dropdown-item-button" 
            title="Language" style={{color: "white"}}>
              <Dropdown.Item as="button"><Link to="/">English</Link></Dropdown.Item>
              <Dropdown.Item as="button"><Link to="/italianhome">Italiano</Link></Dropdown.Item>
              <Dropdown.Item as="button"><Link to="/arabichome">عربي</Link></Dropdown.Item>
            </DropdownButton>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item style={{ width: "8rem" }}><Link to="/" style={{color: "white" }}>Home</Link></Nav.Item>
                <Nav.Item style={{ width: "8rem" }}><Link to="/dashboard" style={{color: "white"}}>Dashboard</Link></Nav.Item>
                <Button 
                  onClick={this.onLogoutClick}
                  style={{
                    width: "6rem",
                    backgroundColor: "transparent",
                    border: "0",
                    padding: "0"
                  }}
                >Logout</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      }
}

LoggedinHomeNavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(LoggedinHomeNavBar));