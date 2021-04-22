import React from "react";
import { useDispatch } from "react-redux";
import { textConfig } from "../../../../const.config";
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
      {textConfig.REMOVE_ITEM}
    </div>
  );
};

export default RemoveAllButton;
