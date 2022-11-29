const formatAmount = (amount) => {
  const numberFormat = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    currencyDisplay: "symbol",
  });
  const total = amount / 100;
  return numberFormat.format(total);
};

export default formatAmount;
