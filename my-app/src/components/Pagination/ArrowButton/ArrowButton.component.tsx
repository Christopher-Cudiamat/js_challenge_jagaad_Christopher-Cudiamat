import React from "react";
import { IArrowNextButtonProps } from "./ArrowButton.type";
import nextArrow from "../../../assets/svgs/arrow-right.svg";
import prevArrow from "../../../assets/svgs/arrow-left.svg";
import "./ArrowButton.style.scss";
const ArrowButton: React.FC<IArrowNextButtonProps> = ({
  isHidden,
  direction,
}) => {
  return (
    <img
      src={
        direction === "right" || direction === undefined ? nextArrow : prevArrow
      }
      alt="Arrow"
      className={
        isHidden ? "arrow__next--button" : "arrow__next--button-hidden"
      }
    />
  );
};

export default ArrowButton;
