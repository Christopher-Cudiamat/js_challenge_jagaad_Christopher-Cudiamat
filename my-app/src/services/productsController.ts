import { instanceGet } from "../axios";

export const getProducts = async () => {
  let url =
    "https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0";
  const res = await instanceGet.get(url);
  return res.data;
};
