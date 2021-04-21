import { createStore, compose } from "redux";
import { rootReducer } from "./redux.config";
import { loadState } from "./utils/setLocalStorage";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers());

export default store;
