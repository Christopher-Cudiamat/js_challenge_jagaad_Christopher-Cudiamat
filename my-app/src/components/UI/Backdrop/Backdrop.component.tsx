import React from "react";
import { IBackdropProps } from "./backdrop.type";
import "./backdrop.style.scss";

const Backdrop: React.FC<IBackdropProps> = ({ variant, children }) => {
  return (
    <div
      className={
        variant === "light"
          ? "backdrop backdrop__light"
          : "backdrop backdrop__dark"
      }
    >
      {children}
    </div>
  );
};

export default Backdrop;
