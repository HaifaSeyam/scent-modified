import React from "react";
import { Container } from "react-bootstrap";

function Wrapper (props) {

  return (
    <Container>
        {props.children}
    </Container>
  )
        
  }
  
export default Wrapper;