import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { textConfig } from "../../../../const.config";
import { AppState } from "../../../../redux.config";
import { IProductData } from "../../../../services/productsController/getProducts.type";
import { addProducts } from "../../../../store/bag/bag.action";
import "./addToCartButton.style.scss";
import { IAddToCartButtonProps } from "./addToCartButton.type";

const AddToCartButton: React.FC<IAddToCartButtonProps> = ({ data }) => {
  const alreadyInBag = useSelector((state: AppState) =>
    state.bag.products.some((el: IProductData) => el.uuid === data.uuid)
  );

  const dispatch = useDispatch();

  return (
    <button
      data-testid="add-to-cart-button"
      onClick={() => dispatch(addProducts(data))}
      disabled={alreadyInBag}
      className={
        alreadyInBag
          ? "product__add-to-cart button--in-cart"
          : "product__add-to-cart"
      }
    >
      {alreadyInBag ? textConfig.IN_CART : textConfig.ADD_TO_CART}
    </button>
  );
};

export default AddToCartButton;
