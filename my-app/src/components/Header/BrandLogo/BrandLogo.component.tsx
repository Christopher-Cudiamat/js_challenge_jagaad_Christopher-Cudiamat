import React from "react";
import { textConfig } from "../../../const.config";
import "./brandLogo.style.scss";

const BrandLogo: React.FC = () => {
  return (
    <h1 className="page-title" data-testId="logo-text">
      {textConfig.BRAND}
    </h1>
  );
};

export default BrandLogo;
