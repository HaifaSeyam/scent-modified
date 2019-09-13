import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Card, Button } from "react-bootstrap";
import API from "../../utils/API";
import {withRouter} from 'react-router-dom';

class NewArrivals extends Component {

  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  state= {
    newArrivals: []
  }

  loadNewArrivals = () => {
    return API.getNewArrivals();
  }

  componentDidMount() {
    this.loadNewArrivals()
    .then(response => {
      this.setState({
        newArrivals: response.data
      })
    })
    .catch(err => console.log(err))
  }

  onClick() {
    this.props.history.push('/fragrance')
  }

  render() {
    return (
      <Wrapper style={{ background: "black"}}>
        <h1 className="sectionHeader">Our Newest Fragrances</h1>
        {
          this.state.newArrivals.map((prod, index) => (
          <Card key={index} style={{ width: "16rem" }} className="text-center">
            <Card.Img className="cardImage" variant="top" src={prod.imgPath} />
            <Card.Body>
              <Card.Title className="cardTitle">{prod.name}</Card.Title>
              <Button variant="light" style={{backgroundColor: "#355C7D", color: "white"}} onClick={this.onClick}>Check Out More</Button>
            </Card.Body>
          </Card>))
          
        }
      </Wrapper>
    );
  }
}

export default withRouter(NewArrivals);