import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Wizard.css";

class Step1 extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleAddress(e) {
    this.setState({ address: e.target.value });
  }
  handleCity(e) {
    this.setState({ city: e.target.value });
  }
  handleState(e) {
    this.setState({ state: e.target.value });
  }
  handleZip(e) {
    this.setState({ zip: e.target.value });
  }
  render() {
    return (
      <div className="wizard-widget">
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <p>Address</p>
          <input
            type="text"
            value={this.state.address}
            onChange={this.handleAddress}
          />
          <p>City</p>
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleCity}
          />
          <p>State</p>
          <input
            type="text"
            value={this.state.state}
            onChange={this.handleState}
          />
          <p>Zip</p>
          <input
            type="text"
            value={this.state.zipcode}
            onChange={this.handleZip}
          />
        </form>
        <Link to="/wizard/step2">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

export default Step1;
