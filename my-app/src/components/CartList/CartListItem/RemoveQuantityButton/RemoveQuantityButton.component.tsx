import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../store/bag/bag.action";
import { IRemoveQuantityButtonProps } from "./removeQuantityButton.type";
import "./removeQuantityButton.style.scss";

const RemoveQuantityButton: React.FC<IRemoveQuantityButtonProps> = ({
  product,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={quantity <= 1}
      className="remove__button"
      onClick={() => dispatch(removeProduct(product, 1))}
    >
      -
    </button>
  );
};

export default RemoveQuantityButton;
