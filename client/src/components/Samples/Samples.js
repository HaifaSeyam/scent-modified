import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import "./Samples.css";

class Samples extends Component {

  render() {
    return (
      <Fragment>
        <Carousel>
          <Carousel.Item>
              <img className="d-block w-100 image" src="./assets/images/aerin.jpg" alt="First slide"/>
              <Carousel.Caption className="caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img className="d-block w-100 image" src="./assets/images/escada.jpg" alt="Third slide"/>
              <Carousel.Caption className="caption">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img className="d-block w-100 image" src="./assets/images/blogger-gin.jpg" alt="Third slide"/>
              <Carousel.Caption className="caption">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
     
      </Fragment>
    );
  }
}

export default Samples;