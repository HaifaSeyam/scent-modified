import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Wrapper from "../Wrapper/Wrapper";
import StripeCheckout from 'react-stripe-checkout';
import API from "../../utils/API";

class CheckoutComp extends Component {
  
  constructor(props){
    super(props);

    this.onToken = this.onToken.bind(this);
    this.onClosed = this.onClosed.bind(this);
  }

  onToken(token) {
    console.log("Token Id:", token.id);
    const userId = localStorage.getItem('payload');
    console.log("User Id:", userId);

    API.UpdateUserData(userId, token.id).then(res => console.log("User model after adding the token:", res));

    fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            stripeToken: token.id
          })
        }).then((res) => res.json())
          .then(json => {
            console.log("json", json)
          })

  }

  onClosed() {
    this.props.history.push('/dashboard')
  } 

  render() {
    return (

      <Wrapper>
        <h1 className="sectionHeader">Subscribe Now</h1>
        <p>Try before wasting your money buying bigger sizes. Every month you choose one of our multible fragrances 
          and get them delivered right to your door.</p>
          <p>Too often people spend a fortune on a product they may hate within a week. Scent allows you to sample 
            our prestigious brands without the commitment! Each month you can rebrand your smell and save.</p>
          <p>With Scent, you get a 30-day sample of the perfume of your choice, without the unnecessary spend. Love it? 
            Subscribe now!</p>
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_RVooQXm4Yw67fTCYW8PSH5st0089cHjpNN"
            name="SCENT"
            description="Perfume Subscription Services"
            image="./assets/images/circle.jpg"
            label="Subscribe Now"
            panelLabel="Subscribe"
            amount={1199}
            currency="USD"
            email="info@scent.com"
            shippingAddress
            billingAddress={false}
            closed={this.onClosed}
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
              backgroundImage: "linear-gradient( #F8B195, #F67280, #C06C84, #6C5B7B, #355C7D)",
              margin: "0 auto"
            }}
          />
      </Wrapper>
    );
  }
}

export default withRouter(CheckoutComp);