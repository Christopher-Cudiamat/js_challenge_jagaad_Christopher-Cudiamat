export const ADD_PRODUCT = "ADD_PRODUCT";

export interface IAddProductAction {
  type: string;
  payload: any;
}

export interface IBagState {
  products: any[] | [];
  totalPrice: number;
}

export type BagReducerAction = IAddProductAction;
