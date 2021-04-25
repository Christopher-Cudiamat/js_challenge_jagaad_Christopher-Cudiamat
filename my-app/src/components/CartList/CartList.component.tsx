import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { textConfig } from "../../const.config";
import { AppState } from "../../redux.config";
import TotalPrice from "../Header/TotalPrice/TotalPrice.component";
import "./cartList.style.scss";
import CartListItem from "./CartListItem/CartListItem.component";
import "./cartList.style.scss";
import { getDistinctElement } from "../../utils/getDistinctElement";
import ExploreToursButton from "../UI/Buttons/ExploreToursButton/ExploreToursButton.component";
import { IProductData } from "../../services/productsController/getProducts.type";

const CartList: React.FC = () => {
  const products = useSelector((state: AppState) => state.bag.products);
  const cartProducts = getDistinctElement(products, "uuid");

  return (
    <div
      className={
        cartProducts.length > 0
          ? "cart__container"
          : "cart__container cart__no-result"
      }
    >
      {cartProducts.length > 0 ? (
        <div data-testId="cart-list-modal">
          <ul data-testId="cart-list-items-container">
            {cartProducts.map((el: IProductData) => (
              <CartListItem
                key={el.uuid}
                product={el}
                productsList={products}
              />
            ))}
          </ul>
          <div className="cartList__total-price">
            <h4>{textConfig.CART_SUB_TOTAL}</h4>
            <TotalPrice />
          </div>
        </div>
      ) : (
        <div data-testId="no-result-cart-list">
          <h3>No product found</h3>
          <ExploreToursButton />
        </div>
      )}
    </div>
  );
};

export default CartList;
