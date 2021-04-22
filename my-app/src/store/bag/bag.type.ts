export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCTS = "REMOVE_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export interface IAddProductAction {
  type: string;
  payload: any;
}

export interface IRemoveProductsAction {
  type: string;
  payload: any;
}

export interface IRemoveProductAction {
  type: string;
  payload: string;
}

export interface IBagState {
  products: any[] | [];
  totalPrice: number;
}

export type BagReducerAction =
  | IAddProductAction
  | IRemoveProductsAction
  | IRemoveProductAction;
