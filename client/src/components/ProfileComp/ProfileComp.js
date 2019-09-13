import React, { Component } from "react";
import { connect } from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import { Table, Button } from "react-bootstrap";
import UpdateDataModal from "../UpdateDataModal/UpdateDataModal";
import AlertModal from "../AlertModal/AlertModal";
import API from "../../utils/API";
import * as actionTypes from "../../actions/types";

class ProfileComp extends Component {

  // state = {
  //     updateModalShow: false,
  //     alertModalShow: false,
  //     user: ""
  //   }

  componentDidMount() {
    const userId = localStorage.getItem('payload');

    API.getUserData(userId).then(response => {
      this.props.user = response.data;
    })
    .catch(err => console.log(err))
  }

  // showUpdateModal() { this.props.updateModalShow = true }
  
  // showAlertModal() { this.props.alertModalShow = true }

  // updateModalClose = () => { this.props.updateModalShow = false }
  // alertModalClose = () => { this.props.alertModalShow = false }

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
    showUpdateModal: () => dispatch({ type: actionTypes.SHOW_UPDATE_MODAL }),
    showAlertModal: () => dispatch({ type: actionTypes.SHOW_ALERT_MODAL }),
    updateModalClose: () => dispatch({ type: actionTypes.UPDATE_MODAL_CLOSE }),
    alertModalClose: () => dispatch({ type: actionTypes.ALERT_MODAL_CLOSE })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComp);