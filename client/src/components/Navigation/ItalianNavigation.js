import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

function ItalianNavigation() {
  return (
    <Nav 
    style={{
      display: "flex",
      backgroundColor: "transparent", 
      borderBottom: "hidden",
      position: "absolute",
      top: "75vh",
      left: "50%",
      WebkitTransform: "translateX(-50%)",
      transform: "translateX(-50%)",
      zIndex: "9999"
      }}
      className="nav" variant="tabs" defaultActiveKey="/">
        {/* <Nav.Item>
            <Link to="/">Home</Link>
        </Nav.Item> */}
        <Nav.Item
        style={{
          padding: "0 5vw",
          textAlign: "center", 
          fontSize: "1.25rem"

        }}>
            <Link 
            style={{
              color:"white"
            }}
            to="/fragrance">Le fragranze</Link>
        </Nav.Item>
        <Nav.Item style={{
          padding: "0 5vw",
          textAlign: "center",
          fontSize: "1.25rem"
        }}>
            <Link 
            style={{
              color:"white"
            }}
            to="/howItWorks">Come funziona</Link>
        </Nav.Item>
    </Nav>
  );
}

export default ItalianNavigation;