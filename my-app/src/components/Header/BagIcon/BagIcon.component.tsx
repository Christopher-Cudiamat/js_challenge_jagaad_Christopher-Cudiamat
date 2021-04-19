import React, { Fragment } from "react";
import bagIcon from "../../../assets/svgs/bag.svg";
import "./bagIcon.style.scss";
const BagIcon: React.FC = () => {
  return (
    <Fragment>
      <img src={bagIcon} alt="Bag" className="icon" />
      <span className="bag__item-counter">10</span>
    </Fragment>
  );
};

export default BagIcon;
