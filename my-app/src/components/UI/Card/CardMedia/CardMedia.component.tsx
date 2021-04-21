import React from "react";
import "./cardMedia.style.scss";
import { ICardMediaProps } from "./cardMedia.type";
const CardMedia: React.FC<ICardMediaProps> = ({ image, ...props }) => {
  return (
    <figure className="product__image-wrapper">
      {props.children}
      <img src={image} alt="Product" className="product__image" />
    </figure>
  );
};

export default CardMedia;
