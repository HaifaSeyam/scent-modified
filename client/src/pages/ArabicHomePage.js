import React, { Component, Fragment } from "react";
import ArabicHighlighted from "../components/Highlighted/ArabicHighlighted";
import ArabicNewArrivals from "../components/NewArrivals/ArabicNewArrivals";
import ArabicAbout from "../components/About/ArabicAbout";
import ArabicSubscripeNow from "../components/SubscribeNow/ArabicSubscripeNow";
import ArabicFooter from "../components/Footer/ArabicFooter";
import ArabicParticlesNav from "../components/Particles/ArabicParticlesNav";
import ArabicNavBar from "../components/NavBar/ArabicNavBar";

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
        <ArabicNavBar />
        <ArabicParticlesNav />
        <ArabicAbout />
        <ArabicSubscripeNow />
        <ArabicHighlighted />
        <hr />
        <ArabicNewArrivals />
        <ArabicFooter />
      </Fragment>
    );
  }
}

export default Home;