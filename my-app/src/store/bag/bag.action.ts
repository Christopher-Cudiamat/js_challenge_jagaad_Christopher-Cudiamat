import {
  ADD_PRODUCT,
  IAddProductAction,
  IRemoveProductAction,
  IRemoveProductsAction,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
} from "./bag.type";

export const addProducts = (product: any): IAddProductAction => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProducts = (product: any): IRemoveProductsAction => {
  return {
    type: REMOVE_PRODUCTS,
    payload: product,
  };
};

export const removeProduct = (product: any): IRemoveProductAction => {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  };
};
