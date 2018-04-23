import React from "react"
import "./Card.css";


const Card = props => (
  <div className="card">
      <img alt={props.id} src={props.image} onClick={() => props.handleClick(props.id)}/>
  </div>
);

export default Card;
