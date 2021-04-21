import React from "react";
import "./modal.style.scss";

const Modal: React.FC = (props) => {
  return <div className="modal">{props.children}</div>;
};

export default Modal;
