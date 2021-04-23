import { ILoaderState, IS_LOADING_PAGE, ILoaderAction } from "./loaders.type";

const initialState: ILoaderState = {
  loaderPage: false,
};

export const loadersReducer = (
  state = initialState,
  action: ILoaderAction
): ILoaderState => {
  switch (action.type) {
    case IS_LOADING_PAGE:
      return { ...state, loaderPage: action.payload };
    default:
      return state;
  }
};
