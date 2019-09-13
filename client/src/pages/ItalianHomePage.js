import React, { Component, Fragment } from "react";
import ItalianHighlighted from "../components/Highlighted/ItalianHighlighted";
import ItalianNewArrivals from "../components/NewArrivals/ItalianNewArrivals";
import ItalianAbout from "../components/About/ItalianAbout";
import ItalianSubscripeNow from "../components/SubscribeNow/ItalianSubscripeNow";
import ItalianFooter from "../components/Footer/ItalianFooter";
import ItalianParticlesNav from "../components/Particles/ItalianParticlesNav";
import ItalianNavBar from "../components/NavBar/ItalianNavBar";

class Home extends Component {

  isAuth () {
    const isAuth = localStorage.getItem('jwtToken');

    if (isAuth) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Fragment>
        <ItalianNavBar />
        <ItalianParticlesNav />
        <ItalianAbout />
        <ItalianSubscripeNow />
        <ItalianHighlighted />
        <hr />
        <ItalianNewArrivals />
        <ItalianFooter />
      </Fragment>
    );
  }
}

export default Home;