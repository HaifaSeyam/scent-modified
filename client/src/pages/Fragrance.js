import React, { Component, Fragment } from "react";
import ParticlesNav from "../components/Particles/ParticlesNav";
import NavBar from "../components/NavBar/NavBar";
import FragranceCard from "../components/FragranceCard/FragranceCard";
import Footer from "../components/Footer/Footer";
import LoggedinHomeNavBar from "../components/LoggedinHomeNavBar/LoggedinHomeNavBar";


class Fragrance extends Component {

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
        <FragranceCard />
        <Footer />

      </Fragment>
    );
  }
}

export default Fragrance;