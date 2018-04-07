import React from "react";
import "./House.css";

const House = props => {
  return (
    <div className="property">
      <img className="property-image" src={props.image} alt="property image" />
      <div className="property-container">
        <p>Property Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zip: {props.zip}</p>
      </div>
      <div>
        <p>Monthly Mortgage: {props.mortgage}</p>
        <p>Desired Rent: {props.rent}</p>
      </div>
      <button
        onClick={() => {
          props.delete(props.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default House;
