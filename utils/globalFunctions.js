export const setAndOpenError = (
  error,
  { setIsLoading, setErrorMessage, setErrorOpen }
) => {
  setIsLoading(false);
  setErrorMessage(error);
  setErrorOpen(true);
};

export const plantATreeBundle = (
  orderid,
  continent,
  location,
  arrayProducts
) => {
  return {
    orderid: orderid,
    continent: continent,
    location: location,
    products: arrayProducts,
  };
};
