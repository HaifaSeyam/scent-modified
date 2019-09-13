import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css"

class About extends Component {

  render() {
    return (
      <Wrapper >
          <h1 className="sectionHeader">The Experience</h1>
        <Container className="about">
          <Row>
            <Col>
              <Card bg="light" style={{ width: '100%' }} className="text-left">
                <Card.Header>Get it right.</Card.Header>
                <Card.Body>
                  <Card.Title>Find Your Scent.</Card.Title>
                  <Card.Text>
                    With Scent, you get a 30-day sample of the perfume of your choice, without the unnecessary spend. Love it? Save it to your favorites!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="light" style={{ width: '100%', borderRadius: "50% 20% / 10% 40%" }} className="text-center">
                
                <Card.Body>
                  <Card.Title>Your Fragrance</Card.Title>
                  <Card.Text>
                    Too often people spend a fortune on a product they may hate within a week. Scent allows you to sample our prestigious brands without the commitment! Each month you can rebrand your smell and save.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="light" style={{ width: '100%' }} className="text-left">
                <Card.Header>Still Unsure?</Card.Header>
                <Card.Body>
                  <Card.Title>Leave the choice to us!</Card.Title>
                  <Card.Text>
                    We're currently creating a customizable, curated list of perfumes for every occasion and preference. Woodsy? Or maybe citrus? We have you covered.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default About;