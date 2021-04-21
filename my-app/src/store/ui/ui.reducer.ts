import { IUiState, SET_TOGGLE, UiReducerAction } from "./ui.type";

const initialState: IUiState = {
  showCartListModal: false,
  showWhishlistModal: false,
};

export const uiReducer = (
  state = initialState,
  action: UiReducerAction
): IUiState => {
  switch (action.type) {
    case SET_TOGGLE: {
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    }
    default:
      return state;
  }
};
