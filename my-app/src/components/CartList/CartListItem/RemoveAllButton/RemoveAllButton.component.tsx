import React from "react";
import { useDispatch } from "react-redux";
import { removeProducts } from "../../../../store/bag/bag.action";
import "./removeAllButton.style.scss";
import { IRemoveAllButtonProps } from "./removeAllButton.type";

const RemoveAllButton: React.FC<IRemoveAllButtonProps> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="remove-icon"
      onClick={() => dispatch(removeProducts(product))}
    >
      x
    </div>
  );
};

export default RemoveAllButton;
