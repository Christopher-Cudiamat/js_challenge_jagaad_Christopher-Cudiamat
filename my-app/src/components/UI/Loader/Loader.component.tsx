import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop.component";
import { ILoaderProps } from "./loader.type";
import "./loader.style.scss";

const Loader: React.FC<ILoaderProps> = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="loader-container" data-testId="loader">
          <Backdrop variant={"light"} />
          <div className="loader" />
        </div>
      )}
    </div>
  );
};

export default Loader;
