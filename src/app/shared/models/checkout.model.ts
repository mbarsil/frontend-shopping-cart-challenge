import { Product } from "./product.model";
import { productNames, productPrices } from "../enums/products.enum";

export class Checkout {

  constructor(public products: Product[], public discounts: object) {
    this.products = products;
    this.discounts = discounts;
  }

  scan(productCode) {
    const itemIndex = this.findProductIndex(productCode);
    if (itemIndex === -1) {
      this.products = [
        ...this.products,
        new Product(productCode[productCode], productNames[productCode], productPrices[productCode], 1)
      ];
    } else {
      this.products[itemIndex].increaseQuantity();
    }
    return this;
  }

  remove(productCode) {
    const itemIndex = this.findProductIndex(productCode);
    this.products[itemIndex].decreaseQuantity();
    return this;
  }

  total() {
    const totalPrice = this.products.reduce((prev, curr) => {
      return prev + this.discounts[curr.code].modifier(curr.price, curr.quantity);
    });
    console.log(totalPrice);
  }

  findProductIndex (productCode) {
    return this.products.findIndex((el) => {
      return el.code === productCode;
    });
  }

}
