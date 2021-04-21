import React, { Fragment } from "react";
import bagIcon from "../../../assets/svgs/bag.svg";
import "./bagIcon.style.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux.config";

const BagIcon: React.FC = () => {
  const bagDataLength = useSelector(
    (state: AppState) => state.bag.products.length
  );

  return (
    <Fragment>
      <img src={bagIcon} alt="Bag" className="icon" />
      <span className="bag__item-counter">{bagDataLength}</span>
    </Fragment>
  );
};

export default BagIcon;
