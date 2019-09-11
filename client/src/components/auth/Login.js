 /* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated && this.props.auth.user.user_type === 'buyer') {
      this.props.history.push("/buy");
    }
    else if (this.props.auth.isAuthenticated && this.props.auth.user.user_type === 'seller') {
      this.props.history.push('/sell');
    }
  }

  componentWillReceiveProps(nextProps) {
    const {user}  = this.props.auth;
    console.log("user", user);
    if (nextProps.auth.isAuthenticated && nextProps.auth.user.user_type === 'buyer') {
      this.props.history.push("/buy");
    }  else if ( nextProps.auth.isAuthenticated && nextProps.auth.user.user_type === 'seller' ) {
      this.props.history.push("/sell");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (

      <section>
        <div className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="subtitle is-3 has-text-centered heading">
                Login
              </div>
              <div className="columns is-centered">
                <div className="column is-half">
                <div className="box">
                <form className="inputform" novalidate onSubmit={this.onSubmit}>

                  <div className="field form-field is-expanded">
                    <div className="field has-addons">
                      <p className="control">
                        <span className="button  btn-size  is-static">
                          Email
                        </span>
                      </p>
                      <p className="control is-expanded">
                        <input className="input login-input" onChange={this.onChange} value={this.state.email} error={errors.email} id="email"  type="email" placeholder="Enter you Email id" />
                      </p>
                    </div>
                    <p className="help is-danger">{errors.email}</p>
                  </div>

                  <div className="field form-field is-expanded">
                    <div className="field has-addons">
                      <p className="control">
                        <span className="button   btn-size  is-static">
                          Password
                        </span>
                      </p>
                      <p className="control is-expanded">
                        <input className="input login-input" onChange={this.onChange} value={this.state.password}  error={errors.password} id="password"  type="password" placeholder="Enter your Password" />
                      </p>
                    </div>
                    <p className="help is-danger">{errors.password}</p>
                  </div>

                  <div className="field ">
                    <div className="control has-text-centered">
                      <button className="button subt-btn is-outlined is-link">Login</button>
                    </div>
                  </div>

                </form>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
