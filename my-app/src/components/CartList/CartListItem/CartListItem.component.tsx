import React from "react";
import { ICartListItemProps } from "./cartListItem.type";
import "./cartListItem.style.scss";
import { truncateLongString } from "../../../utils/truncateLongString";
import RemoveAllButton from "./RemoveAllButton/RemoveAllButton.component";
import AddQuantityButton from "./AddQuantityButton/AddQuantityButton.component";
import RemoveQuantityButton from "./RemoveQuantityButton/RemoveQuantityButton.component";

const CartListItem: React.FC<ICartListItemProps> = ({
  product,
  productsList,
}) => {
  const { title, retail_price, cover_image_url, uuid } = product;
  const quantity = productsList.filter((obj: any) => obj.uuid === uuid).length;
  const maxString = 40;

  return (
    <li className="cartItem__container">
      <div className="cartItem__image-container">
        <div
          style={{ backgroundImage: `url(${cover_image_url})` }}
          className="cartItem__image"
        />
      </div>
      <div className="cartItem__details">
        <p>{truncateLongString(title, maxString)}</p>
        <div>
          <p>{retail_price.formatted_value}</p>
        </div>
      </div>
      <div className="cartItem__buttons-container">
        <RemoveAllButton product={product} quantity={quantity} />
        <div>
          <AddQuantityButton product={product} />
          <p>{`${quantity}`}</p>
          <RemoveQuantityButton product={product} quantity={quantity} />
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
