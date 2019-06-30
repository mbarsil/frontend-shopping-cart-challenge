export const discounts = {
  CAP:
    {
      description: '2x1 Mug offer',
      modifier: (pricePerUnit, quantity) => {
        if ((quantity % 2) === 0) return (pricePerUnit * quantity)/2;
        else return quantity;
      }
    },
  TSHIRT:
    {
      description: '3 or more T-Shirts offer',
      modifier: (pricePerUnit, quantity) => {
        if (quantity >= 3) return (pricePerUnit - 1) * quantity;
        else return quantity;
      }
    }
};
