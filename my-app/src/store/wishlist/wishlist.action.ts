import { ADD_TO_WISHLIST, IAddToWishlistAction } from "./wishlist.type";

export const addToWishlist = (product: any): IAddToWishlistAction => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};
