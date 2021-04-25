import React from "react";
import { IBackdropProps } from "./backdrop.type";
import "./backdrop.style.scss";

const Backdrop: React.FC<IBackdropProps> = ({ onClick, variant }) => {
  return (
    <div
      data-testId="backdrop"
      onClick={onClick}
      className={
        variant === "light"
          ? "backdrop backdrop__light"
          : "backdrop backdrop__dark"
      }
    />
  );
};

export default Backdrop;
