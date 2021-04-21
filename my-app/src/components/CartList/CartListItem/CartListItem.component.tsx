import React from "react";
import { ICartListItemProps } from "./cartListItem.type";
import "./cartListItem.style.scss";
import { truncateLongString } from "../../../utils/truncateLongString";

const CartListItem: React.FC<ICartListItemProps> = ({ product }) => {
  console.log(product);
  const { title, retail_price, cover_image_url } = product;
  return (
    <li className="cartItem__container">
      <div className="cartItem__image-container">
        <div
          style={{ backgroundImage: `url(${cover_image_url})` }}
          className="cartItem__image"
        />
      </div>
      <div className="cartItem__details">
        <p>{truncateLongString(title, 40)}</p>
        <p>{retail_price.formatted_value}</p>
      </div>
    </li>
  );
};

export default CartListItem;
