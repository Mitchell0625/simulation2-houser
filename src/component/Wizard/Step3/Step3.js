import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Step3 extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: ""
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
  addHouse(e) {
    const { name, address, city, state, zip } = this.state;
    axios.post("/api/house", { name, address, city, state, zip });
  }
  render() {
    return (
      <div>
        <div>
          <h5>Recommended Rent: $0</h5>
          <h4>Monthly Mortgage Amount</h4>
          <input
            type="text"
            value={this.state.mortgage}
            onChange={this.handleMortgage}
          />
          <h4>Desired Monthly Rent</h4>
          <input
            type="text"
            value={this.state.rent}
            onChange={this.handleRent}
          />
        </div>
        <Link to="/wizard/step1">
          <button>Previous Step</button>
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

export default Step3;
