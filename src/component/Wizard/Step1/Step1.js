import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProp } from "../../../ducks/reducer";

import "../Wizard.css";

class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      st: "",
      zip: ""
    };
    // this.handleName = this.handleName.bind(this);
    // this.handleAddress = this.handleAddress.bind(this);
    // this.handleCity = this.handleCity.bind(this);
    // this.handleState = this.handleState.bind(this);
    // this.handleZip = this.handleZip.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.st,
      zip: this.props.zip
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { addProp } = this.props;

    return (
      <div className="wizard-widget">
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <p>Address</p>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.onChange}
          />
          <p>City</p>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.onChange}
          />
          <p>State</p>
          <input
            type="text"
            name="st"
            value={this.state.st}
            onChange={this.onChange}
          />
          <p>Zip</p>
          <input
            type="text"
            name="zip"
            value={this.state.zip}
            onChange={this.onChange}
          />
        </form>
        <Link to="/wizard/step2">
          <button
            className="next"
            onClick={() => {
              addProp(
                this.state.name,
                this.state.address,
                this.state.city,
                this.state.st,
                this.state.zip
              );
            }}
          >
            Next Step
          </button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { name, address, city, st, zip } = state;
  return {
    name,
    address,
    city,
    st,
    zip
  };
}
export default connect(mapStateToProps, { addProp })(Step1);
