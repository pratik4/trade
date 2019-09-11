 /* eslint-disable */
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';


class Navbar extends Component {

  state = {
    activeMenu: false,
  };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    })
  }

  render() {
    let seller = (
      <Link to="/seller" className="navbar-item button is-light is-radiusless is-outlined is-primary">
        Sell Scrap
      </Link>
    )
    let buyer = (
      <Link to="/buyer" className="navbar-item button is-light is-radiusless is-outlined is-primary">
        Buy Scrap
      </Link>
    )

    const {user} = this.props.auth;

    if (this.props.auth.isAuthenticated && user.user_type === 'seller') {
      seller =  (
        <Link to="/seller" className="navbar-item button is-light is-radiusless is-outlined is-primary">
          Post Your Product
        </Link>
      )
      buyer = ''
    }
    if (this.props.auth.isAuthenticated && user.user_type === 'buyer') {
      buyer = (
        <Link to="/buyer" className=" is-radiusless navbar-item button is-outlined is-primary">
         Post Your Requirements
       </Link>
      )
      seller = ''
    }

    return (
      <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="title">REWIND</h1>
          </Link>

          <a role="button" onClick={this.toggleMenu} className={ `navbar-burger burger ${this.state.activeMenu ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" onClick={this.toggleMenu} className={`navbar-menu nav-animate ${this.state.activeMenu ? 'is-active': ''}`}>
          <div className="navbar-end">

              <div className="navbarItem">
                {seller}
              </div>
              <div className="navbarItem">
                {buyer}
              </div>
              <div className="navbarItem">
                <span className="navbar-item button is-info is-radiusless">
                  Help
                </span>
              </div>
              <div className="navbarItem">
              {this.props.auth.isAuthenticated ? (
                <span onClick={this.onLogoutClick} className="navbar-item button is-link is-radiusless" >Logout</span>
              ) : (
                <Link to="/login" className="navbar-item button is-link is-radiusless">
                  Login
                </Link>
              )}
              </div>
            </div>
          </div>
      </nav>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
