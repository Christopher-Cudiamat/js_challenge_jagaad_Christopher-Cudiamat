import { IProductData } from "../../../services/productsController/getProducts.type";
export interface ICartListItemProps {
  product: IProductData;
  productsList: IProductData[];
}
