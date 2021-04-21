export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";

export interface IAddToWishlistAction {
  type: string;
  payload: any;
}

export interface IWishListState {
  products: any[] | [];
}

export type WishlistReducerActions = IAddToWishlistAction;
