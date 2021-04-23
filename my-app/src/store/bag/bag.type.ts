import { IProductData } from "../../services/productsController/getProducts.type";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCTS = "REMOVE_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export interface IAddProductAction {
  type: string;
  payload: IProductData;
  quantity: number;
}

export interface IRemoveProductsAction {
  type: string;
  payload: IProductData;
  quantity: number;
}

export interface IRemoveProductAction {
  type: string;
  payload: IProductData;
  quantity: number;
}

export interface IBagState {
  products: IProductData[] | [];
  totalPrice: number;
}

export type BagReducerAction =
  | IAddProductAction
  | IRemoveProductAction
  | IRemoveProductsAction;
