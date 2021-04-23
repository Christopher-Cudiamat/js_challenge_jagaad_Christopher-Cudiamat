import { ILoaderPageAction, IS_LOADING_PAGE } from "./loaders.type";

export const setIsLoadingPage = (loaderState: boolean): ILoaderPageAction => {
  return {
    type: IS_LOADING_PAGE,
    payload: loaderState,
  };
};
