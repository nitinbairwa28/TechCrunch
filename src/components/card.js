import React from 'react';
import './books'; // Create this CSS file for styling

const Card = (props) => {
  return (
    <div className="background-container">
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div></div>
  );
};

export default Card;
