import React from "react";
import { useDispatch } from "react-redux";
import { removeSingleWishlist } from "../../../../store/wishlist/wishlist.action";
import "./removeWishListButton.style.scss";
import { IRemoveWishtlistButtonProps } from "./removeWishListButton.type";

const RemoveWishtlistButton: React.FC<IRemoveWishtlistButtonProps> = ({
  product,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      data-testid="wishlist-remove-button"
      className="remove-wishlist__button"
      onClick={() => dispatch(removeSingleWishlist(product))}
    >
      X
    </button>
  );
};

export default RemoveWishtlistButton;
