import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./Wizard.css";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

import { clearFields } from "../../ducks/reducer";

class Wizard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clearFields } = this.props;
    return (
      <div className="wizard-widget">
        <div className="wizard-top">
          <h1>Add New Listing</h1>
          <Link to="/">
            <button onClick={clearFields}>Cancel</button>
          </Link>
        </div>
        <Route path="/wizard/step1" component={Step1} />
        <Route path="/wizard/step2" component={Step2} />
        <Route path="/wizard/step3" component={Step3} />
      </div>
    );
  }
}

export default connect(null, { clearFields })(Wizard);
