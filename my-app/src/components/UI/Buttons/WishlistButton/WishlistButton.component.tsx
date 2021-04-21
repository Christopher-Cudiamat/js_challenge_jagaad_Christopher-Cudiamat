import React from "react";
import StarIcon from "../../../../assets/svgs/wishlist.svg";
import "./whishlistButton.style.scss";
import { IWishlistButtonProps } from "./wishlistButton.type";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../../store/wishlist/wishlist.action";
import { AppState } from "../../../../redux.config";

const WishlistButton: React.FC<IWishlistButtonProps> = ({ data }) => {
  const alreadyInCart = useSelector((state: AppState) =>
    state.wishlist.products.find((el: any) => el.uuid === data.uuid)
  );

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addToWishlist(data))}
      disabled={alreadyInCart}
      className="product__wishlist-button button--wishlist"
    >
      <img
        src={StarIcon}
        alt="Star"
        className={alreadyInCart ? "icon wishlist__button--disabled" : "icon"}
      />
    </button>
  );
};

export default WishlistButton;
