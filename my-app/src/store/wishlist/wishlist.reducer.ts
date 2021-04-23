import { IProductData } from "../../services/productsController/getProducts.type";
import {
  ADD_TO_WISHLIST,
  WishlistReducerActions,
  IWishListState,
  REMOVE_SINGLE_WISHLIST,
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
    case REMOVE_SINGLE_WISHLIST: {
      const filteredProducts = state.products.filter(
        (el: IProductData) => el.uuid !== action.payload.uuid
      );

      return {
        ...state,
        products: filteredProducts,
      };
    }
    default:
      return state;
  }
};
