import React from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../../../store/bag/bag.action";
import { IAddQuantityButtonProps } from "./addQuantityButton.type";

const AddQuantityButton: React.FC<IAddQuantityButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(addProducts(product))}>+</div>;
};

export default AddQuantityButton;
