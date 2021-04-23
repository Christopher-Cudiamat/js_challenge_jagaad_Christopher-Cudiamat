import { IProductData } from "../../services/productsController/getProducts.type";
import {
  ADD_PRODUCT,
  IAddProductAction,
  IRemoveProductAction,
  IRemoveProductsAction,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
} from "./bag.type";

export const addProducts = (
  product: IProductData,
  quantity = 1
): IAddProductAction => {
  return {
    type: ADD_PRODUCT,
    payload: product,
    quantity,
  };
};

export const removeProduct = (
  product: IProductData,
  quantity = 1
): IRemoveProductAction => {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
    quantity,
  };
};

export const removeProducts = (
  product: IProductData,
  quantity: number
): IRemoveProductsAction => {
  return {
    type: REMOVE_PRODUCTS,
    payload: product,
    quantity: quantity,
  };
};
