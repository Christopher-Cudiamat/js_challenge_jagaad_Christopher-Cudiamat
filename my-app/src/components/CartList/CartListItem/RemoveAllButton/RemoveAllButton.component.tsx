import React from "react";
import { useDispatch } from "react-redux";
import { textConfig } from "../../../../const.config";
import { removeProducts } from "../../../../store/bag/bag.action";
import "./removeAllButton.style.scss";
import { IRemoveAllButtonProps } from "./removeAllButton.type";

const RemoveAllButton: React.FC<IRemoveAllButtonProps> = ({
  product,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      data-testid="remove-all-button"
      className="remove-icon"
      onClick={() => dispatch(removeProducts(product, quantity))}
    >
      {textConfig.REMOVE_ITEM}
    </button>
  );
};

export default RemoveAllButton;
