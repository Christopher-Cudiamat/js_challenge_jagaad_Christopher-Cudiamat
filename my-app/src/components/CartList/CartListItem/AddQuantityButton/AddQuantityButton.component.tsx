import React from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../../../store/bag/bag.action";
import { IAddQuantityButtonProps } from "./addQuantityButton.type";
import "./addQuantityButton.style.scss";

const AddQuantityButton: React.FC<IAddQuantityButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      data-testId="add-quantity-button"
      className="add__button"
      onClick={() => dispatch(addProducts(product))}
    >
      +
    </button>
  );
};

export default AddQuantityButton;
