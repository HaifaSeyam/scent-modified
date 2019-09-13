import React from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';

class UpdateDataModal extends React.Component {

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
              Updating Personal Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card style={{ width: "99%", margin: "0 auto" }}>
          <Card.Body>
            <Card.Text><h6>Please enter your new information: </h6></Card.Text>
            <Form.Control 
              type="text" 
              placeholder="Enter your New Information" />
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
              onClick={this.close}>Save</Button>
          </Card.Body>
          </Card>
          </Modal.Body>
        </Modal>
      );
    }
  }

  export default UpdateDataModal;