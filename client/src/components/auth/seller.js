import React from 'react';
import {  withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import adddetails from '../../assets/images/adddetails.png';
import rupee from '../../assets/images/rupee.png';
import product from '../../assets/images/product.png';
import newuser from '../../assets/images/newuser.png';

class SellerRegister extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      user_type: "seller",
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
    console.log('e', e)
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
    console.log(errors)
    return (
      <section>
        <div className="hero ">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-8 selldetail">
                  <div>
                    <div className="title is-4 is-spaced ">
                      Sell your Products on the platform in 4 Simple Steps:
                    </div>
                    <div className="level ">
                      <div className="level-item">
                        <div>
                          <img className="image is-centered is-64x64" alt="create account" src={newuser}  />
                          <p className="subtitle">Create Account</p>
                        </div>
                      </div>
                      <div className="level-item">
                      <div>
                        <img className="image is-centered is-64x64" alt="add details" src={adddetails}  />
                        <p className="subtitle">Add Details</p>
                      </div>
                      </div>
                      <div className="level-item ">
                        <div>
                          <img className="image is-centered is-64x64" alt="product" src={product}  />
                          <p className="subtitle">Add Product</p>
                        </div>
                      </div>
                      <div className="level-item">
                        <div>
                          <img className="image is-centered is-64x64"alt="start selling"  src={rupee}  />
                          <p className="subtitle">Start Selling</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                <div className="box">
                  <div className="heading has-text-centered form-header">
                    <strong>Create your account as a Seller</strong>
                  </div>
                  <form noValidate onSubmit={this.onSubmit}>

                    <div className="field form-field is-expanded">
                        <div className="field has-addons">
                          <p className="control">
                            <span className="button btn-size is-static">
                              Name
                            </span>
                          </p>
                          <p className="control is-expanded">
                            <input className="input" onChange={this.onChange} error={errors.name} value={this.state.name} id="name" name='name' type="text" placeholder="Text input" />
                          </p>
                        </div>
                        <p className="help is-danger">{errors.name}</p>
                    </div>


                    <div className="field form-field is-expanded">
                      <div className="field has-addons">
                        <p className="control">
                          <span className="button  btn-size  is-static">
                            Email
                          </span>
                        </p>
                        <p className="control is-expanded">
                          <input className="input" onChange={this.onChange} value={this.state.email} error={errors.email} id="email"  type="email" placeholder="Enter you Email id" />
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
                          <input className="input" onChange={this.onChange} value={this.state.password}  error={errors.password} id="password"  type="password" placeholder="Enter your Password" />
                        </p>
                      </div>
                      <p className="help is-danger">{errors.password}</p>
                    </div>

                    <div className="field form-field is-expanded">
                      <div className="field has-addons">
                        <p className="control">
                          <span className="button   btn-size  is-static">
                            Password
                          </span>
                        </p>
                        <p className="control is-expanded">
                          <input className="input" onChange={this.onChange} value={this.state.password2}  error={errors.password2} id="password2"  type="password" placeholder="Re-Enter your Password" />
                        </p>
                      </div>
                        <p className="help is-danger">{errors.password2}</p>
                    </div>


                    <div className="field">
                      <div className="control">
                        <button className="button is-fullwidth is-outlined is-black">Submit</button>
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

SellerRegister.propTypes = {
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
)(withRouter(SellerRegister));
