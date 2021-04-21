import React from "react";
import Backdrop from "../UI/Backdrop/Backdrop.component";
import Modal from "../UI/Modal/Modal.component";
import "./cartListModal.style.scss";

const CartListModal: React.FC = () => {
  return (
    <Backdrop variant="dark">
      <Modal>
        <div className="cart-container">hey</div>
      </Modal>
    </Backdrop>
  );
};

export default CartListModal;
