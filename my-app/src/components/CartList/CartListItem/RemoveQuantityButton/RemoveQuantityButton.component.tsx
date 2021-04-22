import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../store/bag/bag.action";
import { IRemoveQuantityButtonProps } from "./removeQuantity.type";

const RemoveQuantityButton: React.FC<IRemoveQuantityButtonProps> = ({
  product,
}) => {
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(removeProduct(product))}>-</div>;
};

export default RemoveQuantityButton;
