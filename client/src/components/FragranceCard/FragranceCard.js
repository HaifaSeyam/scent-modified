import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Card, Button } from "react-bootstrap";
import API from "../../utils/API";
import { withRouter } from 'react-router-dom';
import MyVerticallyCenteredModal from '../MyVerticallyCenteredModal/MyVerticallyCenteredModal';
import AlertModal from '../AlertModal/AlertModal';


class FragranceCard extends Component {
  
  state= {
    perfumes: [],
    modalShow: false,
    alertModalShow: false,
    currentPerfume: [],
    msg: ""
  }

  loadPerfume = () => {
    return API.getPerfume()
  }

  componentDidMount() {
    this.loadPerfume()
    .then(response => {
      this.setState({
        perfumes: response.data
      })
    })
    .catch(err => console.log(err))
  }

  viewDetails = (prod) => {
    let path = "/details";
    this.props.history.push(path); 
  }

  addToFavorite(prod) {
    const isAuth = localStorage.getItem('jwtToken');
    if (isAuth) {
      this.setState({ modalShow: true, currentPerfume: prod })
    } else {
      this.setState({ alertModalShow: true, msg: "You're not logged in. Click register to get started now. Already a member? Sign in." })
    }
  }
  
  handleAddToFavorites = (prod) => {
    this.addToFavorite(prod);
  }
  modalClose = () => this.setState({ modalShow: false });
  alertModalClose = () => this.setState({ alertModalShow: false });

  render() {
    return (
      <Wrapper>
        <h1 className="sectionHeader">Fragrances</h1>
        {
          this.state.perfumes.map((prod, index) => (
          <Card key={index} style={{ width: "16rem" }} className="text-center">
            <Card.Img 
            className="cardImage" variant="top" src={prod.imgPath} 
            />
            <Card.Body>
              <Card.Title className="cardTitle">{prod.name}</Card.Title>
              <Button variant="light"
              style={{ backgroundColor: "#355C7D", color: "white" }} 
              onClick={() => this.handleAddToFavorites(prod)}
              >Add to Favorites</Button>
            </Card.Body>
          </Card>))
          
        }
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={this.modalClose}
          closeModal={this.modalClose}
          prod={this.state.currentPerfume}
        />
        <AlertModal
          show={this.state.alertModalShow}
          onHide={this.alertModalClose}
          closeModal={this.alertModalClose}
          msg={this.state.msg}
        />
      </Wrapper>
    );
  }
}

export default withRouter(FragranceCard);