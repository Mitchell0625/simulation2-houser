import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { addMortRent } from "../../../ducks/reducer";
import { clearFields } from "../../../ducks/reducer";

import "../Wizard.css";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      rent: 0
    };
    this.handleMortgage = this.handleMortgage.bind(this);
    this.handleRent = this.handleRent.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }
  handleMortgage(e) {
    this.setState({ mortgage: e.target.value });
  }
  handleRent(e) {
    this.setState({ rent: e.target.value });
  }
  addHouse() {
    const { name, address, city, state, zip, image } = this.props;
    const { mortgage, rent } = this.state;
    // const { mortgage, rent } = this.state;
    axios.post("/api/house", {
      name,
      address,
      city,
      state,
      zip,
      image,
      mortgage,
      rent
    });
  }

  handleMortgage(e) {
    this.setState({ mortgage: e.target.value });
  }

  handleRent(e) {
    this.setState({ rent: e.target.value });
  }

  componentDidMount() {
    this.setState({ mortgage: this.props.mortgage, rent: this.props.rent });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="step3-div wizard-widget">
          <h5>Recommended Rent: $0</h5>
          <form>
            <h4>Monthly Mortgage Amount</h4>
            <input
              type="text"
              name="mortgage"
              value={this.state.mortgage}
              onChange={this.handleMortgage}
            />
            <h4>Desired Monthly Rent</h4>
            <input
              type="text"
              name="rent"
              value={this.state.rent}
              onChange={this.handleRent}
            />
          </form>
        </div>
        <Link to="/wizard/step2">
          <button
            onClick={() => addMortRent(this.state.mortgage, this.state.rent)}
          >
            Previous Step
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => {
              this.addHouse();
            }}
          >
            Complete
          </button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { addMortRent, clearFields })(Step3);
