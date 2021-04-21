import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux.config";
import "./totalPrice.style.scss";

const TotalPrice: React.FC = () => {
  const totalPrice = useSelector((state: AppState) => state.bag.totalPrice);
  return <div className="header-bag__price">€{totalPrice}</div>;
};

export default TotalPrice;
