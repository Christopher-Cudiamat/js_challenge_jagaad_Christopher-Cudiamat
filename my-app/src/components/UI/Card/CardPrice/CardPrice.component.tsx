import React, { Fragment } from "react";
import { ICardPriceProps } from "./cardPrice.type";
import "./cardPrice.style.scss";

const CardPrice: React.FC<ICardPriceProps> = ({
  netPrice,
  retailPrice,
  discount,
}) => {
  return (
    <Fragment>
      {discount > 0 ? (
        <div className="product__price">
          <span className="product__price--strike">{netPrice}</span>
          <span className="product__price--discounted">{retailPrice}</span>
        </div>
      ) : (
        <div className="product__price">
          <span className="product__price">{retailPrice}</span>
        </div>
      )}
    </Fragment>
  );
};

export default CardPrice;
