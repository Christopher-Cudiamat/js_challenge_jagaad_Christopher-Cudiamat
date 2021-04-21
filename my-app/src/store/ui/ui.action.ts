import { IUiAction, SET_TOGGLE } from "./ui.type";

export const setToggle = (name: string): IUiAction => {
  return {
    type: SET_TOGGLE,
    name,
  };
};
