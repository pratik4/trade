import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { productForm } from "../../actions/authActions";
import {connect} from 'react-redux';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      productname: '',
      productDescription: '',
      location: '',
      quantity: ''
    };
  }

  onChange= e => {
    this.setState({ [e.target.id]: e.target.value });
  }


    onSubmit = e => {
      e.preventDefault();

      const productData = {
        productname: this.state.productname,
        productDescription: this.state.productDescription,
        location: this.state.location,
        quantity: this.state.quantity
      }

      this.props.productForm(productData)
    }

  render() {

    const {handleSubmit} = this.props;

    return (
      <React.Fragment>
      <form noValidate onSubmit={this.onSubmit}>
        <div class="field">
          <label class="label">Product</label>
          <div class="control">
            <input onChange={this.onChange} id="productname" name="productname" class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Product Desciption</label>
          <div class="control">
            <textarea onChange={this.onChange} id="productDescription" name="productDescription" class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Location</label>
          <div class="control">
            <input  onChange={this.onChange} id="location" name="location" class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Quantity</label>
          <div class="control">
            <input onChange={this.onChange} id="quantity" name="quantity" class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>

      </form>
      </React.Fragment>
    );
  }
}


export default connect(null, {productForm})(Dashboard);
