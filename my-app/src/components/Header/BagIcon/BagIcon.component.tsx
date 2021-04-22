import React, { Fragment } from "react";
import bagIcon from "../../../assets/svgs/bag.svg";
import "./bagIcon.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux.config";
import { setToggle } from "../../../store/modals/modals.action";

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
        onClick={() => dispatch(setToggle("showCartListModal"))}
      />
      <span className="bag__item-counter">{bagDataLength}</span>
    </Fragment>
  );
};

export default BagIcon;
