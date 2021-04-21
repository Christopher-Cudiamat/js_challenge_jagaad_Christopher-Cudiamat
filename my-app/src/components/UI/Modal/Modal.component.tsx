import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setToggle } from "../../../store/ui/ui.action";
import Backdrop from "../Backdrop/Backdrop.component";
import "./modal.style.scss";
import { IModalProps } from "./Modal.type";

const Modal: React.FC<IModalProps> = ({ showModal, children }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      {showModal && (
        <Backdrop
          variant={"dark"}
          onClick={() => dispatch(setToggle("showCartListModal"))}
        >
          <div className="modal">{children}</div>
        </Backdrop>
      )}
    </Fragment>
  );
};

export default Modal;
