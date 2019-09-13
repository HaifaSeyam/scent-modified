import React, { Component, Fragment } from "react";
// import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import DashboardNav from "./DashboardNav/DashboardNav";
import Wrapper from "./Wrapper/Wrapper";
import DashboardNavBar from "./DashboardNavBar/DashboardNavBar";

class Dashboard extends Component {
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Fragment>
        <DashboardNavBar />
        <Wrapper>
          <div style={{ height: "75vh" }}>
                <h4 style={{marginTop: "100px", textAlign: "center"}}>
                  <b>Hey there,</b> {user.name.split(" ")[0]}
                  <p>
                    Welcome to your dashboard{" "} 👏
                  </p>
                </h4>
                <DashboardNav/>
          </div>
          </Wrapper>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);