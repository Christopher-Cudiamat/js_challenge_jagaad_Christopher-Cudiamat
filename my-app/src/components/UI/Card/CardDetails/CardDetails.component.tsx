import React from "react";
import "./cardDetails.style.scss";

const CardDetails: React.FC = (props) => {
  return (
    <div className="product__details" data-testid="wishlist-details">
      {props.children}
    </div>
  );
};

export default CardDetails;
