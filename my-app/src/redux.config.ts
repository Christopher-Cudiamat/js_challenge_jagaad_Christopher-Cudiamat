/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers } from "redux";
import store from "./store.config";
import { bagReducer } from "./store/bag/bag.reducer";
import { loadersReducer } from "./store/loaders/loaders.reducer";
import { modalsReducer } from "./store/modals/modals.reducer";
import { wishlistReducer } from "./store/wishlist/wishlist.reducer";

export const appReducer = combineReducers({
  bag: bagReducer,
  wishlist: wishlistReducer,
  modals: modalsReducer,
  loaders: loadersReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "APP_DATA_RESET") {
    state = undefined;
  }
  return appReducer(state, action);
};

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
