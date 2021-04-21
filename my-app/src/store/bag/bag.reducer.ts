import { ADD_PRODUCT, BagReducerAction, IBagState } from "./bag.type";

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
      let newPrice = action.payload.original_retail_price.value;
      if (action.payload.discount > 0) {
        newPrice = action.payload.retail_price.value;
      }
      return {
        ...state,
        totalPrice: state.totalPrice + newPrice,
        products: [...state.products, action.payload],
      };
    }
    default:
      return state;
  }
};
