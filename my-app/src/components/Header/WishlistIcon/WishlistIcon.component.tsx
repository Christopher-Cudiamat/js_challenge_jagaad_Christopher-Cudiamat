import React, { Fragment } from "react";
import wishlist from "../../../assets/svgs/wishlist.svg";
import "./wishlistIcon.style.scss";

const WhishlistIcon: React.FC = () => {
  return (
    <Fragment>
      <img src={wishlist} alt="Bag" className="icon" />
      <span className="bag__item-counter">10</span>
    </Fragment>
  );
};

export default WhishlistIcon;
