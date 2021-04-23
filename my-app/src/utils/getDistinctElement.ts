import { IProductData } from "../services/productsController/getProducts.type";

export const getDistinctElement = (
  myArray: IProductData[],
  props: string
): IProductData[] => {
  return myArray.filter((el, pos, arr) => {
    return arr.map((mapEl) => mapEl[props]).indexOf(el[props]) === pos;
  });
};
