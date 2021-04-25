import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux.config";
import WishListItem from "./WishListItem/WishListItem.component";
import "./wishList.style.scss";
import ExploreToursButton from "../UI/Buttons/ExploreToursButton/ExploreToursButton.component";
import { IProductData } from "../../services/productsController/getProducts.type";

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
        <ul
          className="whishlist-item__container"
          data-testId="wishlist-item-container"
        >
          {wishlistproducts.map((el: IProductData) => (
            <WishListItem key={el.uuid} product={el} />
          ))}
        </ul>
      ) : (
        <Fragment>
          <h3 data-testId="no-result-wishlist">No product found</h3>
          <ExploreToursButton />
        </Fragment>
      )}
    </div>
  );
};

export default WishList;
