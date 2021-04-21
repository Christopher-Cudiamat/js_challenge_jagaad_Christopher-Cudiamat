import React from "react";
import StarIcon from "../../../../assets/svgs/wishlist.svg";
import "./whishlistButton.style.scss";
import { IWishlistButtonProps } from "./wishlistButton.type";
const WishlistButton: React.FC<IWishlistButtonProps> = ({ isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className="product__wishlist-button button--wishlist"
    >
      <img
        src={StarIcon}
        alt="Star"
        className={isDisabled ? "icon wishlist__button--disabled" : "icon"}
      />
    </button>
  );
};

export default WishlistButton;
