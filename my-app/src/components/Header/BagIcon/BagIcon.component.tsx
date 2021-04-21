import React, { Fragment } from "react";
import bagIcon from "../../../assets/svgs/bag.svg";
import "./bagIcon.style.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux.config";

const BagIcon: React.FC = () => {
  const bagData = useSelector((state: AppState) => state.bag.products);

  console.log(bagData);
  return (
    <Fragment>
      <img src={bagIcon} alt="Bag" className="icon" />
      <span className="bag__item-counter">{bagData.length}</span>
    </Fragment>
  );
};

export default BagIcon;
