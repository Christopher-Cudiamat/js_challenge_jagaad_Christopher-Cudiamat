import {
  ICloseModalsAction,
  IUiAction,
  SET_TOGGLE,
  CLOSE_MODALS,
} from "./modals.type";

export const setToggle = (name: string): IUiAction => {
  return {
    type: SET_TOGGLE,
    name,
  };
};

export const closeModals = (name = ""): ICloseModalsAction => {
  return {
    type: CLOSE_MODALS,
    name,
  };
};
