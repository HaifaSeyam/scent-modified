import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Card, Button } from "react-bootstrap";

class Details extends Component {

  render() {
      console.log(this.props)
    return (
      <Wrapper>
        <h1 className="sectionHeader">This is the Details Page</h1>
        {
          <Card style={{ width: "16rem" }}>
            <Card.Img 
            className="cardImage" variant="top" />
            <Card.Body>
              <Card.Title className="cardTitle"></Card.Title>
              <Card.Text className="cardText">Price:  </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          
        }
      </Wrapper>
    );
  }
}

export default Details;