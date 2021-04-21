import { ADD_PRODUCT, IAddProductAction } from "./bag.type";

export const addProducts = (product: any): IAddProductAction => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
