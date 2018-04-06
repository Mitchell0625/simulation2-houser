import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "./Wizard.css";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

class Wizard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wizard-widget">
        <div className="wizard-top">
          <h1>Add New Listing</h1>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
        <Route path="/wizard/step1" component={Step1} />
        <Route path="/wizard/step2" component={Step2} />
        <Route path="/wizard/step3" component={Step3} />
      </div>
    );
  }
}

export default Wizard;
