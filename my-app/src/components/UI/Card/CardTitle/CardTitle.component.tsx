import React from "react";
import "./cardTitle.style.scss";

const CardTitle: React.FC = (props) => {
  return <h1 className="product__title ">{props.children}</h1>;
};

export default CardTitle;
