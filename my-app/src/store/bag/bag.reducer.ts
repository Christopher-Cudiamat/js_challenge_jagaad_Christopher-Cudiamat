import { getDiscountedPrice } from "../../utils/getDiscountedPrice";
import {
  ADD_PRODUCT,
  BagReducerAction,
  IBagState,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
} from "./bag.type";

const initialState: IBagState = {
  products: [],
  totalPrice: 0,
};

export const bagReducer = (
  state = initialState,
  action: BagReducerAction
): IBagState => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newPrice = getDiscountedPrice(
        action.payload.discount,
        action.payload.retail_price.value,
        action.payload.original_retail_price.value
      );

      return {
        ...state,
        totalPrice: state.totalPrice + newPrice,
        products: [...state.products, action.payload],
      };
    }
    case REMOVE_PRODUCTS: {
      const newProductsList = state.products.filter(
        (el: any) => el.uuid !== action.payload.uuid
      );
      const newPrice = getDiscountedPrice(
        action.payload.discount,
        action.payload.retail_price.value,
        action.payload.original_retail_price.value
      );

      return {
        ...state,
        totalPrice: state.totalPrice - newPrice,
        products: newProductsList,
      };
    }
    case REMOVE_PRODUCT: {
      const a = state.products
        .filter((el: any) => el.uuid === action.payload.uuid)
        .splice(1);

      const b = state.products.filter(
        (el: any) => el.uuid !== action.payload.uuid
      );

      const newPrice = getDiscountedPrice(
        action.payload.discount,
        action.payload.retail_price.value,
        action.payload.original_retail_price.value
      );

      return {
        ...state,
        totalPrice: state.totalPrice - newPrice,
        products: [...a, ...b],
      };
    }
    default:
      return state;
  }
};
