import React, { Component } from "react";
import { connect } from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import { Table, Button } from "react-bootstrap";
import UpdateDataModal from "../UpdateDataModal/UpdateDataModal";
import AlertModal from "../AlertModal/AlertModal";
import * as actionCreators from "../../actions/profileActions";

class ProfileComp extends Component {

  render() {
    return (
        <Wrapper>
          <h1 className="sectionHeader">Personal Information</h1>
          <Table responsive>
            <tbody>
              <tr>
                <td><h3>Name </h3></td>
                <td><h3> {this.props.user.name} </h3></td>
                <td>
                  <Button 
                    style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem",
                          backgroundColor: "#355C7D",
                          float: "right"
                        }}
                    variant="primary" type="submit"
                    onClick={() => this.props.showUpdateModal()}>
                    Change
                  </Button>
                </td>
              </tr>
              <tr>
                <td><h3>Email</h3></td>
                <td><h3> {this.props.user.email} </h3></td>
                <td>
                  <Button 
                    style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem",
                          backgroundColor: "#355C7D",
                          float: "right"
                        }}
                    variant="primary" type="submit"
                    onClick={() => this.props.showUpdateModal()}>
                    Change
                  </Button>
                </td>
              </tr>
              <tr>
                <td><h3>Password</h3></td>
                <td><span><i>You can't see your password for security reasons</i></span></td>
                <td>
                  <Button 
                    style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem",
                          backgroundColor: "#355C7D",
                          float: "right"
                        }}
                    variant="primary" type="submit"
                    onClick={() => this.props.showAlertModal()}>
                    Reset
                  </Button>
                </td>
              </tr>
              <tr>
                <td><h3>Receipts</h3></td>
                <td><span><i>Available for previous 12 months only.</i></span></td>
                <td>
                  <Button 
                    style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem",
                          backgroundColor: "#355C7D",
                          float: "right"
                        }}
                    variant="primary" type="submit"
                    onClick={() => this.props.showAlertModal()}>
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <UpdateDataModal
            show={this.props.updateModalShow}
            onHide={this.props.updateModalClose}
            closeModal={this.props.updateModalClose}
          />
          <AlertModal
            show={this.props.alertModalShow}
            onHide={this.props.alertModalClose}
            closeModal={this.props.alertModalClose}
            msg="Coming Soon ... "
          />
        </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    updateModalShow: state.profile.updateModalShow,
    alertModalShow: state.profile.alertModalShow,
    user: state.profile.user
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    showUpdateModal: () => dispatch(actionCreators.showUpdateModal()),
    showAlertModal: () => dispatch(actionCreators.showAlertModal()),
    updateModalClose: () => dispatch(actionCreators.updateModalClose()),
    alertModalClose: () => dispatch(actionCreators.alertModalClose())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComp);