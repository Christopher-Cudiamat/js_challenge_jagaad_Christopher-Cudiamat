import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux.config";
import WishListItem from "./WishListItem/WishListItem.component";
import "./wishList.style.scss";

const WishList: React.FC = () => {
  const wishlistproducts = useSelector(
    (state: AppState) => state.wishlist.products
  );

  const cartProducts = useSelector((state: AppState) => state.bag.products);

  const filteredProducts = wishlistproducts.filter((el) =>
    cartProducts.every((el2) => el2.uuid !== el.uuid)
  );

  return (
    <div
      className={
        filteredProducts.length > 0
          ? "wishlist__container"
          : "wishlist__container cart__no-result"
      }
    >
      {filteredProducts.length > 0 ? (
        <ul className="whishlist-item__container">
          {filteredProducts.map((el: any) => (
            <WishListItem key={el.uuid} product={el} />
          ))}
        </ul>
      ) : (
        <h3>No product found</h3>
      )}
    </div>
  );
};

export default WishList;