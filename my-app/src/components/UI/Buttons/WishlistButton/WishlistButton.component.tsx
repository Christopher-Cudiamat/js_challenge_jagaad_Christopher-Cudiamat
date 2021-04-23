import React from "react";
import StarIcon from "../../../../assets/svgs/wishlist.svg";
import "./whishlistButton.style.scss";
import { IWishlistButtonProps } from "./wishlistButton.type";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../../store/wishlist/wishlist.action";
import { AppState } from "../../../../redux.config";
import { IProductData } from "../../../../services/productsController/getProducts.type";

const WishlistButton: React.FC<IWishlistButtonProps> = ({ data }) => {
  const alreadyInBag = useSelector((state: AppState) =>
    state.bag.products.some((el: IProductData) => el.uuid === data.uuid)
  );
  const alreadyInWishlist = useSelector((state: AppState) =>
    state.wishlist.products.some((el: IProductData) => el.uuid === data.uuid)
  );

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addToWishlist(data))}
      disabled={alreadyInBag || alreadyInWishlist}
      className="product__wishlist-button button--wishlist"
    >
      <img
        src={StarIcon}
        alt="Star"
        className={
          alreadyInBag || alreadyInWishlist
            ? "icon wishlist__button--disabled"
            : "icon"
        }
      />
    </button>
  );
};

export default WishlistButton;
