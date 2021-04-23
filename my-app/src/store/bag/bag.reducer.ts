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
      //Add a quantity of an item in the cart list
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

    // Remove all quantity of an item in the cart list
    case REMOVE_PRODUCTS: {
      const newProductsList = state.products.filter(
        (el: any) => el.uuid !== action.payload.uuid
      );
      const newPrice = getDiscountedPrice(
        action.payload.discount,
        action.payload.retail_price.value,
        action.payload.original_retail_price.value
      );

      const removedProductsPrice = newPrice * action.quantity;

      return {
        ...state,
        totalPrice: state.totalPrice - removedProductsPrice,
        products: newProductsList,
      };
    }

    // Remove one quantity of an item in the cart list
    case REMOVE_PRODUCT: {
      const a = state.products
        .filter((el: any) => el.uuid === action.payload.uuid)
        .splice(action.quantity);

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
