import React from "react";

const Button = ({ color, title }) => {
  return <button className={`btn btn-${color}`}>{title}</button>;
};

export default Button;
