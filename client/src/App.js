import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import ArabicHomePage from "./pages/ArabicHomePage";
import ItalianHomePage from "./pages/ItalianHomePage";
import Fragrance from "./pages/Fragrance";
import HowItWorks from "./pages/HowItWorks";
import Checkout from "./pages/Checkout";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details/Details";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/arabichome" component={ArabicHomePage}/>
              <Route path="/italianhome" component={ItalianHomePage}/>
              <Route path="/fragrance" component={Fragrance}/>
              <Route path="/howItWorks" component={HowItWorks}/>
              <Route path="/details" component={Details}/>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/favorites" component={Favorites}/>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/nomatch" component={NoMatch}/>
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </Provider>
    );
  }
}

export default App;

