import React from "react";
import { textConfig } from "../../../const.config";
import "./brandLogo.style.scss";

const BrandLogo: React.FC = () => {
  return <h1 className="page-title">{textConfig.BRAND}</h1>;
};

export default BrandLogo;
