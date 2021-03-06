import React from "react";
import { Navbar } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
      <Navbar className="navbar" expand="lg" sticky="bottom" style={{ backgroundImage: "linear-gradient( #355C7D, #6C5B7B, #C06C84, #F67280, #F8B195 )"}}>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Text className="footer" style= {{color: "white"}}>
            <h5>خدمة العملاء</h5>
            <br></br>
            <p>
              المرجعات
            </p>
            <p>
              أسئلة متكررة
            </p>
            <p>
              تحديثات
            </p>
          </Navbar.Text>
          <Navbar.Text className="footer" style= {{color: "white"}}>

            <h5>إتصل بنا</h5>
            <br></br>
            <p>
              1-800-SCENTME
            </p>
            <p>
              info@scent.com
            </p>
          </Navbar.Text>
          <Navbar.Text className="footer" style= {{color: "white"}}>
          <h5>تابعنا</h5>
          <br></br>
          <h2><i className="fab fa-linkedin connect"></i></h2>
          <h2><i className="fab fa-facebook-square"></i></h2>
          <h2><i className="fab fa-instagram"></i></h2>

          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Footer;