import { IProductData } from "../../services/productsController/getProducts.type";
import {
  ADD_TO_WISHLIST,
  IAddToWishlistAction,
  IRemoveSingleWishlistAction,
  REMOVE_SINGLE_WISHLIST,
} from "./wishlist.type";

export const addToWishlist = (product: IProductData): IAddToWishlistAction => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const removeSingleWishlist = (
  product: IProductData
): IRemoveSingleWishlistAction => {
  return {
    type: REMOVE_SINGLE_WISHLIST,
    payload: product,
  };
};
