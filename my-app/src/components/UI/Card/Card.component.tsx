import React from "react";
import "./card.style.scss";
const Card: React.FC = (props) => {
  return (
    <li className="product-list__item">
      <article className="product">{props.children}</article>
    </li>
  );
};

export default Card;
