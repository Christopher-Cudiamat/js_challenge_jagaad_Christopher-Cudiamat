import React from "react";
import "./cardDescription.style.scss";
const CardDescription: React.FC = (props) => {
  return <p className="product__subtitle">{props.children}</p>;
};

export default CardDescription;
