import React from 'react';
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import API from '../../utils/API';


class MyVerticallyCenteredModal extends React.Component {

    savePerfume = (perfume) => {
        const userId = localStorage.getItem('payload');
        API.savePerfume(perfume, userId);
        this.props.closeModal()
    }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='text-center'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ready to try out {this.props.prod.name}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={5}>
                <Card style={{ width: '100%'}}>
                  <Card.Img
                    className="cardImage" variant="top" src={this.props.prod.imgPath} />
                </Card>
              </Col>
              <Col lg={7}>
                <Card style={{ width: '100%', border: 'none' }}>
                  <Card.Body>
                    <Card.Text>
                      <h3>{this.props.prod.name}</h3>
                      <h4>By {this.props.prod.brand}</h4>
                      <p>Hit the "Add to favorites" to include this perfume as one of your samples. You can review your favorites from your dashboard page, so add as many as you'd like!</p>
                    </Card.Text>
                    <Button
                      variant="light"
                      style={{ backgroundColor: '#355C7D', color: 'white', border: 'none' }}
                      onClick={() => { this.savePerfume(this.props.prod) }}
                    >Add to favorites
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;