import { IProductData } from "../../services/productsController/getProducts.type";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_SINGLE_WISHLIST = " REMOVE_SINGLE_WISHLIST";
export interface IAddToWishlistAction {
  type: string;
  payload: IProductData;
}

export interface IRemoveSingleWishlistAction {
  type: string;
  payload: IProductData;
}

export interface IWishListState {
  products: IProductData[] | [];
}

export type WishlistReducerActions =
  | IAddToWishlistAction
  | IRemoveSingleWishlistAction;
