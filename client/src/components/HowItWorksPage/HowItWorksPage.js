
import React from "react";
import Wrapper from "../Wrapper/Wrapper"
import "./HowItWorksPage.css";

function HowItWorksPage() {
    return (
        <Wrapper>
            <br></br>
            <br></br>
            <br></br>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">First: <span className="text-muted">Get registered.</span></h2>
                    <p className="lead">Sign up for a monthly supply of the fragrance of your choice for $11.99. No hassle, no commitment issues, no stress. You'll be smelling your best without the worry!</p>
                </div>
                <div class="col-md-5">
                    <img className="featurette-image img-fluid mx-auto rounded" src="./assets/images/coffee-conceptual-indoors-1187696.jpg"
                        alt="Generic placeholder" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Second: <span className="text-muted">Pick your fragrance.</span></h2>
                    <p className="lead">Take a look through our stock. We've got the most prestigious brands and the highest number of scents you can find. Best part? You get to switch it each month!</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto rounded" src="./assets/images/beautiful-blur-customer-1526819.jpg"
                        alt="Generic placeholder" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Third: <span className="text-muted">Your monthly fragrance, on your doorstep.</span></h2>
                    <p className="lead">Each month, you'll get your fragrance delivered right to your doorstep. It's as simple as that. No need to do anything besides click, and spray.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto rounded" src="./assets/images/accessories-body-bottle-1253588.jpg" 
                        alt="Generic placeholder" style={{width: '100%', height: '60%'}}/>
                </div>
            </div>

        </Wrapper>
    );
}

export default HowItWorksPage;
