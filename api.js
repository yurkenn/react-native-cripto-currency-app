export const fetchData = () => {
  return fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "aa546347-c8a3-46f7-b856-d5db66a83aee",
      },
    }
  );
};
