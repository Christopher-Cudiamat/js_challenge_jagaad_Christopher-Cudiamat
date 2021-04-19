import axios from "axios";

export const instanceGet = axios.create({
  headers: { "Content-Type": "application/json" },
});
