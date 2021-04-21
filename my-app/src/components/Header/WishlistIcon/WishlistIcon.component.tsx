import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import wishlist from "../../../assets/svgs/wishlist.svg";
import { AppState } from "../../../redux.config";
import "./wishlistIcon.style.scss";

const WhishlistIcon: React.FC = () => {
  const wishListDataLength = useSelector(
    (state: AppState) => state.wishlist.products.length
  );
  return (
    <Fragment>
      <img src={wishlist} alt="Bag" className="icon" />
      <span className="bag__item-counter">{wishListDataLength}</span>
    </Fragment>
  );
};

export default WhishlistIcon;
