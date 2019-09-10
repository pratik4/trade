import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
          </a>

          <a role="button" className="navbar-burger burger" href="" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">

  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">

        <Link to="/seller" className="button is-light">
          Sell
        </Link>
        <a className="button is-light">
          Help
        </a>
        <a href="/buyer" className="button is-light">
          Buyer
        </a>
      </div>
    </div>
  </div>
</div>
</nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
