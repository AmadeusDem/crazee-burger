export const formatPrice = (priceToFormat) => {
  let price = priceToFormat;

  if (!price) return 0;

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  return formattedPrice;
};

export const replaceFrenchCommaWithDot = (price) => {
  if (typeof price === "string") {
    price = price.replace(",", ".");
  }
  return parseFloat(price);
};
