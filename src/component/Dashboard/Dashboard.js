import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import House from "../House/House";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
    this.getAllHouse = this.getAllHouse.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  getAllHouse() {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(console.log);
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).then(() => {
      this.getAllHouse();
    });
  }
  componentDidMount() {
    axios
      .get("/api/houses")
      .then(results => {
        this.setState({ houses: results.data });
      })
      .catch(console.log);
  }
  render() {
    let houses = this.state.houses.map((e, i) => {
      return (
        <House
          key={e.id}
          id={e.id}
          name={e.name}
          address={e.address}
          city={e.city}
          state={e.state}
          zip={e.zip}
          image={e.image}
          mortgage={e.mortgage}
          rent={e.rent}
          delete={this.deleteHouse}
        />
      );
    });
    return (
      <div className="dash-container">
        <div className="dash-top">
          <h1>Dashboard</h1>
          <Link to="/wizard/step1">
            <button>Add New Property</button>
          </Link>
        </div>

        <h3>Home Listings</h3>
        {houses}
      </div>
    );
  }
}

export default Dashboard;
