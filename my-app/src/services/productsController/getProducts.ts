import { instanceGet } from "../../axios";
import { IProductData } from "./getProducts.type";

//This API call fetch the list products from the server with six datas per page

export const getProducts = async (offset: number): Promise<IProductData[]> => {
  const url = `https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=${offset}`;
  const res = await instanceGet.get(url);
  return res.data;
};
