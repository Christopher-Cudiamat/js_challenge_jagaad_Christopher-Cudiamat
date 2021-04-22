export const SET_TOGGLE = "SET_TOGGLE";
export const CLOSE_MODALS = "CLOSE_MODALS";

export interface IUiAction {
  type: string;
  name: string;
}

export interface ICloseModalsAction {
  type: string;
  name: string;
}

export interface IUiState {
  [key: string]: boolean;
  showCartListModal: boolean;
  showWhishlistModal: boolean;
}

export type UiReducerAction = IUiAction | ICloseModalsAction;
