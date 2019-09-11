 /* eslint-disable */

import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class BuyerRegister extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      user_type: "buyer",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated && this.props.auth.user_type === 'buyer') {
      this.props.history.push("/buy");
    }
    else if (this.props.auth.isAuthenticated && this.props.auth.user_type === 'seller') {
      this.props.history.push('/sell');
    }
  }


  componentWillReceiveProps(nextProps) {
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
    console.log("e", e)
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      user_type: this.state.user_type
    };

    this.props.registerUser(newUser, this.props.history);
  };


  render() {
    const { errors } = this.state;

    return (
      <section>
        <div className="hero ">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-mobile">
                <div className="column is-8">
                  <div className="title is-spaced ">
                    Tell Us What You Need.
                  </div>
                  <div className="subtitle">
                    Post Your Requirement
                  </div>
                </div>
                <div className="column is-4">
                <div className="box">
                  <div className="heading has-text-centered">
                    <strong>Create your account as a buyer</strong>
                  </div>
                  <form noValidate onSubmit={this.onSubmit}>

                    <div className="field is-expanded">
                        <div className="field has-addons">
                          <p className="control">
                            <span className="button is-static">
                              Name
                            </span>
                          </p>
                          <p className="control is-expanded">
                            <input className="input" onChange={this.onChange} error={errors.name} value={this.state.name} id="name" name='name' type="text" placeholder="Text input" />
                          </p>
                        </div>
                    </div>
                      <p className="help is-danger">{errors.name}</p>

                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <p className="control">
                          <span className="button is-static">
                            Email
                          </span>
                        </p>
                        <p className="control is-expanded">
                          <input className="input" onChange={this.onChange} value={this.state.email} error={errors.email} id="email"  type="email" placeholder="Enter you Email id" />
                        </p>
                      </div>
                    </div>
                    <p className="help is-danger">{errors.email}</p>

                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <p className="control">
                          <span className="button is-static">
                            Password
                          </span>
                        </p>
                        <p className="control is-expanded">
                          <input className="input" onChange={this.onChange} value={this.state.password}  error={errors.password} id="password"  type="password" placeholder="Enter your Password" />
                        </p>
                      </div>
                    </div>
                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <p className="control">
                          <span className="button is-static">
                            Password
                          </span>
                        </p>
                        <p className="control is-expanded">
                          <input className="input" onChange={this.onChange} value={this.state.password2}  error={errors.password2} id="password2"  type="password" placeholder="Re-Enter your Password" />
                        </p>
                      </div>
                    </div>
                    <p className="help is-danger">{errors.password}</p>

                    <div className="field">
                      <div className="field is-grouped">
                          <div className="control">
                            <button className="button is-link">Submit</button>
                          </div>
                        </div>
                      </div>
                      <p className="help is-danger">{errors.password2}</p>
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

BuyerRegister.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(BuyerRegister));
