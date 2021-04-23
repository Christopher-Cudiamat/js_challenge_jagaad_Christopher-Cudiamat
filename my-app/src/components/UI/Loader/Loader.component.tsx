import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop.component";
import { ILoaderProps } from "./loader.type";
import "./loader.style.scss";

const Loader: React.FC<ILoaderProps> = ({ isLoading }) => {
  return (
    <Fragment>
      {isLoading && (
        <div className="loader-container">
          <Backdrop variant={"light"} />
          <div className="loader" />
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
