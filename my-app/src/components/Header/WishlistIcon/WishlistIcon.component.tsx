import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import wishlist from "../../../assets/svgs/wishlist.svg";
import { AppState } from "../../../redux.config";
import { setToggle } from "../../../store/modals/modals.action";
import NotificationIcon from "../../UI/NotificationIcon/NotificationIcon.component";
import "./wishlistIcon.style.scss";

const WhishlistIcon: React.FC = () => {
  const wishListDataLength = useSelector(
    (state: AppState) => state.wishlist.products.length
  );

  const dispatch = useDispatch();

  return (
    <Fragment>
      <img
        src={wishlist}
        alt="Bag"
        className="icon"
        onClick={() => dispatch(setToggle("showWishListModal"))}
        data-testId="wishlist-button"
      />
      <NotificationIcon
        count={wishListDataLength}
        showNotification={wishListDataLength > 0}
      />
    </Fragment>
  );
};

export default WhishlistIcon;
