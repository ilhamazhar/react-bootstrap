import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="card col-3">
      <img
        src={props.image}
        className="card-img-top"
        alt={props.name}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <span className="card-text">
          <ul className="list-unstyled">
            <li>
              <small className="fs-6">{props.gender}</small>
            </li>
            <li>
              <small className="fs-6">{props.phone}</small>
            </li>
            <li>
              <small
                className={`fs-6 ${
                  props.status === 1 ? "text-primary" : "text-danger"
                }`}
              >
                {props.status === 1 ? "Active" : "Inactive"}
              </small>
            </li>
          </ul>
        </span>
        <Button color="primary" title="More" />
      </div>
    </div>
  );
};

export default Card;
