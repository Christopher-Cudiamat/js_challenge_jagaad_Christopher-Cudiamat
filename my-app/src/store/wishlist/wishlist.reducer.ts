import {
  ADD_TO_WISHLIST,
  WishlistReducerActions,
  IWishListState,
} from "./wishlist.type";

const initialState: IWishListState = {
  products: [],
};

export const wishlistReducer = (
  state = initialState,
  action: WishlistReducerActions
): IWishListState => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    default:
      return state;
  }
};
