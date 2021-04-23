import axios from "axios";
import store from "./store.config";
import { setIsLoadingPage } from "./store/loaders/loaders.action";
import { scrollToTop } from "./utils/scrollManager";

export const instanceGet = axios.create({
  headers: {
    "Content-Type": "application/json",
    "accept-language": "it",
    "x-musement-version": "3.4.0",
    "x-musement-currency": "EUR",
  },
});

instanceGet.interceptors.request.use(async (config) => {
  store.dispatch(setIsLoadingPage(true));
  scrollToTop();
  return config;
});

instanceGet.interceptors.response.use(
  async (config) => {
    store.dispatch(setIsLoadingPage(false));
    return config;
  },
  (error) => {
    store.dispatch(setIsLoadingPage(false));
    return Promise.reject(error);
  }
);
