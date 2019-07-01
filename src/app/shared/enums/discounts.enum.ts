export const discounts = {
  CAP:
    {
      description: '2x1 Mug offer',
      condition: quantity => quantity >1,
      modifier: (pricePerUnit, quantity) => {
        if (quantity % 2 === 0) {
          return ((quantity)/2) * pricePerUnit;
        }
        else {
          return ((quantity)/2) * pricePerUnit + pricePerUnit;
        }
      }
    },
  TSHIRT:
    {
      description: '3 or more T-Shirts offer',
      condition: quantity => quantity >= 3,
      modifier: (pricePerUnit, quantity) => (pricePerUnit - 1) * quantity
    }
};
