import axios from "axios";

export const instanceGet = axios.create({
  headers: {
    "Content-Type": "application/json",
    "accept-language": "it",
    "x-musement-version": "3.4.0",
    "x-musement-currency": "EUR",
  },
});
