import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/fragranceActions"
import Wrapper from "../Wrapper/Wrapper";
import { Card, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import MyVerticallyCenteredModal from '../MyVerticallyCenteredModal/MyVerticallyCenteredModal';
import AlertModal from '../AlertModal/AlertModal';


class FragranceCard extends Component {

  componentDidMount() {
    this.props.displayFragrnace();
  }

  viewDetails = (prod) => {
    let path = "/details";
    this.props.history.push(path); 
  }

  addToFavorite(prod) {
    const isAuth = localStorage.getItem('jwtToken');
    if (isAuth) {
      this.props.modalShow = true;
      this.props.currentPerfume = prod;
    } else {
      this.props.alertModalShow = true;
      this.props.msg = "You're not logged in. Click register to get started now. Already a member? Sign in.";
    }
  }
  
  handleAddToFavorites = (prod) => {
    this.addToFavorite(prod);
  }
  modalClose = () => this.props.modalShow = false;
  alertModalClose = () => this.props.alertModalShow = false;

  render() {
    return (
      <Wrapper>
        <h1 className="sectionHeader">Fragrances</h1>
        {
          this.props.perfumes.map((prod, index) => (
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
          show={this.props.modalShow}
          onHide={this.modalClose}
          closeModal={this.modalClose}
          prod={this.props.currentPerfume}
        />
        <AlertModal
          show={this.props.alertModalShow}
          onHide={this.alertModalClose}
          closeModal={this.alertModalClose}
          msg={this.props.msg}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    perfumes: state.fragrance.perfumes,
    modalShow: state.fragrance.modalShow,
    alertModalShow: state.fragrance.alertModalShow,
    currentPerfume: state.fragrance.currentPerfume,
    msg: state.fragrance.msg
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    displayFragrnace: () => dispatch(actionCreators.displayFragrnace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FragranceCard));