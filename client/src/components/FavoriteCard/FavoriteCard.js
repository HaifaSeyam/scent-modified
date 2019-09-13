import React, { Component } from "react";
import API from "../../utils/API";
import Wrapper from "../Wrapper/Wrapper";
import { Card, Button } from "react-bootstrap";
import AlertModal from "../AlertModal/AlertModal";

class FavoriteCard extends Component {

    state= {
        favorites: [],
        isToken: false,
        alertModalShow: false,
        msg: ""
      }

      componentDidMount() {
        const userId = localStorage.getItem('payload');
        
        API.getUserData(userId).then(response => {
          console.log("Subscribed User TokenId:", response.data.tokenId);
          console.log("first thing: isSelected: ", response.data.sampleSelected);
          if ( response.data.tokenId) {
            this.setState({
              isToken: true
            })
          }
        })
        .catch(err => console.log(err))

        API.getFavorites(userId).then(response => {
          this.setState({
            favorites: response.data
          })
        })
        .catch(err => console.log(err))
      }

      showAlertModal() {
        this.setState({ alertModalShow: true })
      }

      alertModalClose = () => this.setState({ alertModalShow: false });
    
      removeFavorite = id => {
        const userId = localStorage.getItem('payload');
          API.removeFavorites(id, userId)
          .then(res => {
            API.getFavorites(userId).then(response => {
              this.setState({
                favorites: response.data
              });
            })
            .catch(err => console.log(err))
          })
      };

      isSubscribed = () => {

        if (this.state.isToken) {
          return true;
        } else {
          return false;
        }
        // const userId = localStorage.getItem('payload');
        
        // API.getUserData(userId).then(response => {
        //   console.log("Subscribed User TokenId:", response.data.tokenId);
        //   if(response.data.tokenId) {
        //     return true;
        //   } else {
        //     console.log('User is unsubscribed')
        //     return false;
        //   }
        // })
        // .catch(err => console.log(err))
      }

      tryMeOut = () => {

        console.log("Second thing: isSubscribed:", this.isSubscribed())
        
        if(this.isSubscribed()) {
          
          //get todays date (selection date)
          let selectionDate = new Date();
          //parse the selectionDate to seconds to be able to send via url
          let parsedSelectionDate = Date.parse(selectionDate);	
          
          //set the limit date to one month later
          let limitDate = selectionDate.setMonth(selectionDate.getMonth() + 1);
          //parse the limitDate to seconds to be able to send via url
          let parsedLimitDate = Date.parse(new Date(limitDate));

          //store the dates in db
          const userId = localStorage.getItem('payload');
          API.UpdateSelectionDates(userId, parsedSelectionDate, parsedLimitDate).then(res => {
            console.log("third thing: isSub and try me clicked for first time store dates in DB:", res.data);
          });

          //check if user has already selected a sample ---  this is just to track first time selection
          API.getUserData(userId).then(response => {
            console.log("forth thing: isSampleSelected: ", response.data.sampleSelected)
            //if user has already selected a sample
            if (response.data.sampleSelected === true) {
              console.log("only when sampleSelected returns true from DB: ", response.data.sampleSelected)
              //get the day of selection (today's date) -- and parse it
              let currentDate = Date.parse(new Date());

              //get the limitDate and compare to currentDate
              if (currentDate < response.data.limitDate) {
                let dateString = new Date(response.data.limitDate).toUTCString();
                dateString = dateString.split(' ').slice(0, 4).join(' ');
                console.log(dateString);
                this.setState({
                  msg: `Sorry! You have selected your scent for this month. You can try again on ${dateString}`
                });
                this.showAlertModal();
              } else {
                this.setState({
                  msg: "Congratulations! Your fragrance has been SCENT and should arrive soon!"
                });
                this.showAlertModal();
              }
            } 
            //if user has not selected any samples yet --- this will be his first selection
            else if (response.data.sampleSelected === false) {
              console.log("fifth thing: isSampleSelected:", response.data.sampleSelected);

              const userId = localStorage.getItem('payload');
              API.UpdateSelectionData(userId).then(res => {
                console.log("Only once when sampleSelected is false for first time", res.data);
              });

              this.setState({
                msg: "Congratulations! Your first fragrance has been SCENT and should arrive soon!"
              });
              this.showAlertModal();
            }
          })
          .catch(err => console.log(err))

        } else {

          this.setState({
            msg: "Whoops! You are not subscribed. Please subscribe first to be able to select your fragrance."
          });
          this.showAlertModal();
        }
      }

      isFavoriteExist() {
        const userId = localStorage.getItem('payload');
            API.getFavorites(userId).then(response => {
              if (response) {
                return true;
              } else {
                return false;
              }
            })
          }

  render() {
    const hasFavorites = this.state.favorites.length;
    return (
      (hasFavorites > 0) ? (
        <Wrapper>
        <h1 className="sectionHeader">Your Favorites List</h1>
        {
          this.state.favorites.map((prod, index) => (
          <Card key={index} style={{ width: "18rem", margin: "25px" }} className="text-center">
            <Card.Img className="cardImage" variant="top" src={prod.imgPath} />
            <Card.Body>
              <Card.Title className="cardTitle">{prod.name}</Card.Title>
              <Button 
                variant="light" 
                style={{
                  backgroundColor: "#355C7D", 
                  color: "white", 
                  fontSize: "13px", 
                  disply: "inline-block"
                  }} 
                onClick={this.tryMeOut}>
                Try Me Now
              </Button>
              <Button 
                variant="light" 
                style={{
                  backgroundColor: "#355C7D", 
                  color: "white", 
                  fontSize: "13px", 
                  disply: "inline-block"
                  }} 
                  onClick={() => this.removeFavorite(prod._id)}>
                  Not Any More
                </Button>
            </Card.Body>
          </Card>))
          
        }
        <AlertModal
            show={this.state.alertModalShow}
            onHide={this.alertModalClose}
            closeModal={this.alertModalClose}
            msg={this.state.msg}
          />
      </Wrapper>
      ) : (
        <h3 style={{textAlign: "center"}}>You do not have any favorites yet.</h3>
      )
    );
  }
}

export default FavoriteCard;