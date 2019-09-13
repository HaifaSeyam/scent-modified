import React from "react";
import { Container, Alert } from "react-bootstrap";

function NoMatch() {
  return (
    <Container fluid>
          <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Alert>;

    </Container>
  );
}

export default NoMatch;