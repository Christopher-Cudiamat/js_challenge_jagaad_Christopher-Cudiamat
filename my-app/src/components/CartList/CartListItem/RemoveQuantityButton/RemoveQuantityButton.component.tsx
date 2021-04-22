import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../store/bag/bag.action";
import { IRemoveQuantityButtonProps } from "./removeQuantityButton.type";
import "./removeQuantityButton.style.scss";

const RemoveQuantityButton: React.FC<IRemoveQuantityButtonProps> = ({
  product,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      className="remove__button"
      onClick={() => dispatch(removeProduct(product))}
    >
      -
    </button>
  );
};

export default RemoveQuantityButton;
