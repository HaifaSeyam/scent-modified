import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css"

class ItalianAbout extends Component {

  render() {
    return (
      <Wrapper >
          <h1 className="sectionHeader">L'esperienza</h1>
        <Container className="about">
          <Row>
            <Col>
              <Card bg="light" style={{ width: '100%' }} className="text-left">
                <Card.Header>Fallo bene.</Card.Header>
                <Card.Body>
                  <Card.Title>Trova il tuo profumo.</Card.Title>
                  <Card.Text>
                    Con Profumo, scegli un profumo e ricevi un campione di 30 giorni da provare, senza sprecare dei soldi. Ti piace? Salvi i tuoi preferiti!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="light" style={{ width: '100%', borderRadius: "50% 20% / 10% 40%" }} className="text-center">
                
                <Card.Body>
                  <Card.Title>La tua fragranza</Card.Title>
                  <Card.Text>
                    Troppo spesso, le persone spendono una fortuna per comprare un prodotto che alla fine non le piace dopo una settimana. Profumo ti permette di provare i nostri marchi prestigiosi senza preoccuparti! Ogni mese, puoi reinventare il tuo profumo e risparmiare.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="light" style={{ width: '100%' }} className="text-left">
                <Card.Header>Indeciso ancora?</Card.Header>
                <Card.Body>
                  <Card.Title>Lasciaci la scelta!</Card.Title>
                  <Card.Text>
                  Stiamo attualmente creando un elenco di profumi personalizzabili e curati per ogni occasione e preferenza. Scuro? O forse di agrumi? Abbiamo tutto.
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

export default ItalianAbout;