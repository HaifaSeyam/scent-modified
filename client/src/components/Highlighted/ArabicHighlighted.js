import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Card, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./Highlighted.css";
import {withRouter} from 'react-router-dom';


class ArabicHighlighted extends Component {

  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  state = {
    highlighted: []
  }

  loadHighlighted = () => {
    return API.getHighlighted();
  }

  componentDidMount() {
    this.loadHighlighted()
      .then(response => {
        console.log(response)
        this.setState({
          highlighted: response.data
        })
      })
      .catch(err => console.log(err))
  }

  onClick() {
    this.props.history.push('/fragrance')
  }


  render() {
    return (
      <Wrapper>
        <div className="highlightedDiv">
          <h1 className="sectionHeader">عطور فقط لك ...</h1>

            {
              this.state.highlighted.map((prod, index) => (
                <Card key={index} style={{ width: "16rem" }} className="text-center">
                  <Card.Img className="cardImage" variant="top" src={prod.imgPath} />
                  <Card.Body>
                    <Card.Title className="cardTitle">{prod.name}</Card.Title>
                    <Card.Text className="cardText"></Card.Text>
                    <Button variant="light" style= {{backgroundColor: "#355C7D", color: "white"}} onClick={this.onClick}>المزيد</Button>
                  </Card.Body>
                </Card>
              ))
            }
          </div>
      </Wrapper>
        );
      }
    }
    
export default withRouter(ArabicHighlighted);