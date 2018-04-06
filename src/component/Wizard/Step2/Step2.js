import React, { Component } from "react";
import { Link } from "react-router-dom";

class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    };
    this.handleImage = this.handleImage.bind(this);
  }
  handleImage(e) {
    this.setState({ image: e.target.value });
  }

  render() {
    return (
      <div className="step2-div">
        <div className="step2-urlbox">
          <h4>Image URL</h4>
          <input
            type="text"
            value={this.state.image}
            onChange={this.handleImage}
          />
        </div>
        <div>
          <Link to="/wizard/step1">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Step2;
