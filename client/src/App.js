import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";

import BuyerRegister from './components/auth/buyer';
import SellerRegister from './components/auth/seller';

import Sellpage from './components/sell';
import Buypage from './components/buy';


import "./App.css";

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

  console.log(decoded);
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./";
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/seller" component={SellerRegister} />
            <Route exact path="/buyer" component={BuyerRegister} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute user_type='seller' exact path="/sell" component={Sellpage} />
              <PrivateRoute user_type="buyer" exact path="/buy" component={Buypage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
