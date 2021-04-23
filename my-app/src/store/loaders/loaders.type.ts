export const IS_LOADING_PAGE = "IS_LOADING_PAGE";

export interface ILoaderState {
  loaderPage: boolean;
}

export interface ILoaderPageAction {
  type: typeof IS_LOADING_PAGE;
  payload: boolean;
}

export type ILoaderAction = ILoaderPageAction;
