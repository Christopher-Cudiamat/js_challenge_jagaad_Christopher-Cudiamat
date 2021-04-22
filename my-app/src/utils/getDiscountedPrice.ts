export const getDiscountedPrice = (
  discount: number,
  retailPrice: number,
  originalPrice: number
): number => {
  let newPrice = originalPrice;
  if (discount > 0) {
    newPrice = retailPrice;
  }
  return newPrice;
};
