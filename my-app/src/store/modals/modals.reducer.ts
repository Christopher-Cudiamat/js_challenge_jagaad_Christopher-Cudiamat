import {
  CLOSE_MODALS,
  IUiState,
  SET_TOGGLE,
  UiReducerAction,
} from "./modals.type";

const initialState: IUiState = {
  showCartListModal: false,
  showWhishlistModal: false,
};

export const modalsReducer = (
  state = initialState,
  action: UiReducerAction
): IUiState => {
  switch (action.type) {
    case SET_TOGGLE: {
      Object.keys(state).map((el) => (state[el] = false));
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    }
    case CLOSE_MODALS: {
      Object.keys(state).map((el) => (state[el] = false));
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
