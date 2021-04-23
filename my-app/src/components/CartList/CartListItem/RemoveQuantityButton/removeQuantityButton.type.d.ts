import { IProductData } from "../../../../services/productsController/getProducts.type";
export interface IRemoveQuantityButtonProps {
  product: IProductData;
  quantity: number;
}
