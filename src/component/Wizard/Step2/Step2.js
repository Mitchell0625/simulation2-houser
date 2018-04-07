import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addImage } from "../../../ducks/reducer";

import "../Wizard.css";
class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
    this.handleImage = this.handleImage.bind(this);
  }
  handleImage(e) {
    this.setState({ image: e.target.value });
  }
  componentDidMount() {
    this.setState({ image: this.props.image });
  }
  render() {
    const { addImage } = this.props;
    return (
      <div className="step2-div wizard-widget">
        <div className="step2-urlbox">
          <form>
            <h4>Image URL</h4>
            <input
              type="text"
              value={this.state.image}
              onChange={this.handleImage}
            />
          </form>
        </div>

        <div>
          <Link to="/wizard/step1">
            <button onClick={() => addImage(this.state.image)}>
              Previous Step
            </button>
          </Link>
          <Link to="/wizard/step3">
            <button className="next" onClick={() => addImage(this.state.image)}>
              Next Step
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { image } = state;
  return {
    image
  };
}
export default connect(mapStateToProps, { addImage })(Step2);
