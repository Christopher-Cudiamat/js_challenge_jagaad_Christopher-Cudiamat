import React from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../../../store/bag/bag.action";
import "./addToCartButton.style.scss";
import { IAddToCartButtonProps } from "./addToCartButton.type";

const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  isInCart,
  data,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addProducts(data))}
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
