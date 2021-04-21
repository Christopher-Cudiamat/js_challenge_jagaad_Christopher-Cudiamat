import { combineReducers } from "redux";
import { bagReducer } from "./store/bag/bag.reducer";
import { wishlistReducer } from "./store/wishlist/wishlist.reducer";

export const appReducer = combineReducers({
  bag: bagReducer,
  wishlist: wishlistReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "APP_DATA_RESET") {
    state = undefined;
  }
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
