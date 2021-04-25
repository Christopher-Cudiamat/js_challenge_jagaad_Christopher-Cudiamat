import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { closeModals } from "../../../store/modals/modals.action";
import Backdrop from "../Backdrop/Backdrop.component";
import "./modal.style.scss";
import { IModalProps } from "./Modal.type";

const Modal: React.FC<IModalProps> = ({ showModal, children }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      {showModal && (
        <Fragment>
          <Backdrop
            data-testId="backdrop-for-modal"
            variant={"dark"}
            onClick={() => dispatch(closeModals())}
          />
          <div className="modal" data-testId="modal">
            {children}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Modal;
