/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductData } from "../services/productsController/getProducts.type";

export const loadState = (): any => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: { bag: IProductData[] }): any => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
