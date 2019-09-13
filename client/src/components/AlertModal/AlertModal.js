import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

class AlertModal extends React.Component {

    close = () => {
        this.props.closeModal();
    }

    render() {
      return (
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Whoops. Looks like we've run into a problem...
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card style={{ width: "99%", margin: "0 auto" }}>
          <Card.Body>
            <Card.Text><h5 style={{textAlign: "center"}}>{this.props.msg}</h5></Card.Text>
            <Button 
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#355C7D",
                float: "right"
              }}
              variant="primary" 
              onClick={this.close}>Ok</Button>
          </Card.Body>
          </Card>
          </Modal.Body>
        </Modal>
      );
    }
  }

  export default AlertModal;