import React, { Fragment } from "react";
import bagIcon from "../../../assets/svgs/bag.svg";
import "./bagIcon.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux.config";
import { setToggle } from "../../../store/modals/modals.action";
import NotificationIcon from "../../UI/NotificationIcon/NotificationIcon.component";

const BagIcon: React.FC = () => {
  const bagDataLength = useSelector(
    (state: AppState) => state.bag.products.length
  );
  const dispatch = useDispatch();

  return (
    <Fragment>
      <img
        src={bagIcon}
        alt="Bag"
        className="icon"
        data-testId="bag-button"
        onClick={() => dispatch(setToggle("showCartListModal"))}
      />
      <NotificationIcon
        count={bagDataLength}
        showNotification={bagDataLength > 0}
      />
    </Fragment>
  );
};

export default BagIcon;
