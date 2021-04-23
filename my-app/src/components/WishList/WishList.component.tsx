import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux.config";
import WishListItem from "./WishListItem/WishListItem.component";
import "./wishList.style.scss";
import ExploreToursButton from "../UI/Buttons/ExploreToursButton/ExploreToursButton.component";

const WishList: React.FC = () => {
  const wishlistproducts = useSelector(
    (state: AppState) => state.wishlist.products
  );

  return (
    <div
      className={
        wishlistproducts.length > 0
          ? "wishlist__container"
          : "wishlist__container cart__no-result"
      }
    >
      {wishlistproducts.length > 0 ? (
        <ul className="whishlist-item__container">
          {wishlistproducts.map((el: any) => (
            <WishListItem key={el.uuid} product={el} />
          ))}
        </ul>
      ) : (
        <Fragment>
          <h3>No product found</h3>
          <ExploreToursButton />
        </Fragment>
      )}
    </div>
  );
};

export default WishList;
