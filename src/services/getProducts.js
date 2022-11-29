const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = `${process.env.REACT_APP_API_URL}/products`;

  const response = await fetch(url);
  const products = await response.json();

  return products;
};

export { getProducts };
