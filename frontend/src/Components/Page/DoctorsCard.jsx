import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

function DoctorsCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="card-name">{props.name}</p>
      <p className="card-title">{props.title}</p>
      <p className="card-stethocope">
        <FontAwesomeIcon
          icon={faStethoscope}
          style={{ color: "#F7BB50", paddingRight: "6px" }}
        />
        {props.stethocope}  years
        <span className="card-reviews"> ({props.reviews}+ Reviews)</span>
      </p>
    </div>
  );
}

export default DoctorsCard;