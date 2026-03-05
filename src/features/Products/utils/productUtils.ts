export const buildPrice = (price: number, discountPercentage?: number | null) => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const format = (price: number) => formatter.format(price);

  const getOldPrice = (price: number, discountPercentage: number) => {
    return price / (1 - discountPercentage / 100);
  };

  const oldPrice = discountPercentage ? getOldPrice(price, discountPercentage) : null;

  return {
    current: format(price),
    old: oldPrice ? format(oldPrice) : null,
    discount: discountPercentage ? Math.round(discountPercentage) : null,
  };
};
