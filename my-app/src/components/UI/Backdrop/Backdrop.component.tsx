import React from "react";
import { IBackdropProps } from "./backdrop.type";
import "./backdrop.style.scss";

const Backdrop: React.FC<IBackdropProps> = ({ onClick, variant }) => {
  return (
    <div
      data-testid="backdrop"
      onClick={onClick}
      className={`backdrop backdrop__${variant}`}
    />
  );
};

export default Backdrop;
