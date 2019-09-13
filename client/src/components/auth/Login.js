import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import LoginNavBar from "../LoginNavBar/LoginNavBar";
import Wrapper from "../Wrapper/Wrapper";
import { Form, Button } from "react-bootstrap";
// import AuthParticle from "../AuthParticle/AuthParticle";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
    console.log(userData)
  };

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <LoginNavBar />
        {/* <AuthParticle /> */}
        <Wrapper>
          <div style={{ marginTop: "100px", textAlign: "center" }}>
            <h4><b>Login</b> below</h4>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
          <Form 
            style={{width: "50%", margin:"0 auto"}}
            onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })} />
              </Form.Group>
              <span style={{color: "red"}}>
                  {errors.email}
                  {errors.emailnotfound}
              </span>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })} />
              </Form.Group>
              <span style={{color: "red"}}>
                 {errors.password}
                 {errors.passwordincorrect}
              </span>
              <Button 
                style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      backgroundImage: "linear-gradient( #F8B195, #F67280, #C06C84, #6C5B7B, #355C7D)",
                      float: "right"
                    }}
                variant="primary" type="submit">
                Login
              </Button>
          </Form>
        </Wrapper>
      </Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
