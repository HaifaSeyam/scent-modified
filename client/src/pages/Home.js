import React, { Component, Fragment } from "react";
import Highlighted from "../components/Highlighted/Highlighted";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import About from "../components/About/About";
import SubscripeNow from "../components/SubscribeNow/SubscripeNow";
import Footer from "../components/Footer/Footer";
import ParticlesNav from "../components/Particles/ParticlesNav";
import NavBar from "../components/NavBar/NavBar";
import LoggedinHomeNavBar from "../components/LoggedinHomeNavBar/LoggedinHomeNavBar";

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
        {
          this.isAuth() ? <LoggedinHomeNavBar /> : <NavBar />
        }
        
        <ParticlesNav />
        <About />
        <SubscripeNow />
        <Highlighted />
        <hr />
        <NewArrivals />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;