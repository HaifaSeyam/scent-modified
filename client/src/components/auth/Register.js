import React, { Component, Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import RegisterNavBar from "../RegisterNavBar/RegisterNavBar";
import Wrapper from "../Wrapper/Wrapper";
import { Form, Button } from "react-bootstrap";
// import AuthParticle from "../AuthParticle/AuthParticle";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <RegisterNavBar />
        {/* <AuthParticle /> */}
        <Wrapper>
          <div style={{ marginTop: "70px", textAlign: "center" }}>
            <h4><b>Register</b> below</h4>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
          <Form 
            style={{width: "50%", margin:"0 auto"}}
            onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter name"
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  className={classnames("", {
                    invalid: errors.name
                  })}/>
              </Form.Group>
              <span style={{color: "red"}}>{errors.name}</span>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  className={classnames("", {
                    invalid: errors.email
                  })} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <span style={{color: "red"}}>{errors.email}</span>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Enter Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  className={classnames("", {
                    invalid: errors.password
                  })} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Confirm Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  className={classnames("", {
                  invalid: errors.password2
                  })}/>
              </Form.Group>
              <span style={{color: "red"}}>{errors.password2}</span>
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
                Register
              </Button>
          </Form>
        </Wrapper>
      </Fragment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
