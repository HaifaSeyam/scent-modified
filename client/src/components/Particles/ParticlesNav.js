import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Navigation/Navigation';
import './ParticlesNav.css'

const particleOpt = {

    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}


class ParticlesNav extends Component {
    
    render() {
        return (
            <div style={{
                margin: "0",
                padding: "0",
                fontFamily: "sans-serif",
                backgroundImage: "linear-gradient( #F8B195, #F67280, #C06C84, #6C5B7B, #355C7D )",
                width: "100%",
                height: "80vh",
                alignContent: "center",
                zIndex: "0"
            }}>
                <div className='brand'>
                    <h1 className="logo">SCENT</h1>
                    <h5 className="sublogo">The most prestigious brands in your hands</h5>
                </div>
                <Navigation />
                <Particles params={particleOpt} />
            </div>
        )
    }
};

export default ParticlesNav;