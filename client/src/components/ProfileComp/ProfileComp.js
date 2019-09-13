import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Table, Button } from "react-bootstrap";
import UpdateDataModal from "../UpdateDataModal/UpdateDataModal";
import AlertModal from "../AlertModal/AlertModal";
import API from "../../utils/API";

class ProfileComp extends Component {

  state = {
      updateModalShow: false,
      alertModalShow: false,
      user: ""
    }

  componentDidMount() {
    const userId = localStorage.getItem('payload');

    API.getUserData(userId).then(response => {
      this.setState({ user: response.data});
    })
    .catch(err => console.log(err))
  }

  showUpdateModal() {
      this.setState({ updateModalShow: true })
  }
  
  showAlertModal() {
    this.setState({ alertModalShow: true })
  }

  updateModalClose = () => this.setState({ updateModalShow: false });
  alertModalClose = () => this.setState({ alertModalShow: false });

  render() {
    return (
        <Wrapper>
          <h1 className="sectionHeader">Personal Information</h1>
          <Table responsive>
            <tbody>
              <tr>
                <td><h3>Name </h3></td>
                <td><h3> {this.state.user.name} </h3></td>
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
                    onClick={() => this.showUpdateModal()}>
                    Change
                  </Button>
                </td>
              </tr>
              <tr>
                <td><h3>Email</h3></td>
                <td><h3> {this.state.user.email} </h3></td>
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
                    onClick={() => this.showUpdateModal()}>
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
                    onClick={() => this.showAlertModal()}>
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
                    onClick={() => this.showAlertModal()}>
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <UpdateDataModal
            show={this.state.updateModalShow}
            onHide={this.updateModalClose}
            closeModal={this.updateModalClose}
          />
          <AlertModal
            show={this.state.alertModalShow}
            onHide={this.alertModalClose}
            closeModal={this.alertModalClose}
            msg="Coming Soon ... "
          />
        </Wrapper>
    );
  }
}

export default ProfileComp;