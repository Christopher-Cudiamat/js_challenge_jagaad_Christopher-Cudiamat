import { createStore, compose } from "redux";
import { rootReducer } from "./redux.config";
import { loadState, saveState } from "./utils/setLocalStorage";
import throttle from "lodash/throttle";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers());

//Saving some redux state to the local storage to make them persist
store.subscribe(
  throttle(() => {
    saveState({
      bag: store.getState().bag,
      wishlist: store.getState().wishlist,
    });
  }, 1000)
);

export default store;
