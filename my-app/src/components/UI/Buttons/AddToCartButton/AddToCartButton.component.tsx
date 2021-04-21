import React from "react";
import "./addToCartButton.style.scss";
import { IAddToCartButtonProps } from "./addToCartButton.type";
const AddToCartButton: React.FC<IAddToCartButtonProps> = ({ isInCart }) => {
  return (
    <button
      className={
        isInCart
          ? "product__add-to-cart button--in-cart"
          : "product__add-to-cart"
      }
    >
      {isInCart ? "IN CART" : "ADD TO CART"}
    </button>
  );
};

export default AddToCartButton;
