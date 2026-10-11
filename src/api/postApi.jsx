import axios from "axios";

const api = axios.create({
  // 1. Added quotes around the URL
  // 2. Removed "/latest/USD" from the end
  baseURL: "https://v6.exchangerate-api.com/v6/97bb0fb10e0e568f8e596ba7"
});

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};