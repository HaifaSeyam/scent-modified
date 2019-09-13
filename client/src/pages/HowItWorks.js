import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import HowItWorksPage from "../components/HowItWorksPage/HowItWorksPage"
import ParticlesNav from "../components/Particles/ParticlesNav";
import NavBar from "../components/NavBar/NavBar";
import LoggedinHomeNavBar from "../components/LoggedinHomeNavBar/LoggedinHomeNavBar";

class HowItWorks extends Component {

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
        <HowItWorksPage />
        <Footer />
      </Fragment>

    );
  }
}

export default HowItWorks;