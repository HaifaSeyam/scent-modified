import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Card } from "react-bootstrap";
import "./SubscripeNow.css";
import { Link } from "react-router-dom";

class SubscripeNow extends Component {

  render() {
    return (
      <Wrapper>
          <Card style={{ width: "100%", backgroundColor: "#355C7D" }}className="text-center" >
            <Card.Body>
            <h1> <Link to="/register" style={{ color: "white"}} >إشترك الآن</Link></h1>
            </Card.Body>
          </Card>
      </Wrapper>
    );
  }
}

export default SubscripeNow;