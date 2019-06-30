import { Product } from "./product.model";
import { productImgs, productNames, productPrices } from "../enums/products.enum";

export class Checkout {

  constructor(public totalItems: number,
              public originalCost: number,
              public totalCost: number,
              public discountsApplied: Set<object>,
              public products: Product[],
              public discounts: object) {
    this.totalItems = totalItems;
    this.originalCost = originalCost;
    this.totalCost = totalCost;
    this.discountsApplied = discountsApplied;
    this.discounts = discounts;
    this.products = products;
  }

  scan(productCode) {
    const itemIndex = this.findProductIndex(productCode);
    if (itemIndex === -1) {
      this.products = [
        ...this.products,
        new Product(productCode[productCode], productNames[productCode], productPrices[productCode], productImgs[productCode], 1)
      ];
    } else {
      this.products[itemIndex].increaseQuantity();
    }
    this.originalCost += this.products[itemIndex].price;
    this.totalItems += 1;
    this.totalCost = this.total();
    return this;
  }

  remove(productCode) {
    const itemIndex = this.findProductIndex(productCode);
    this.products[itemIndex].decreaseQuantity();
    this.originalCost -= this.products[itemIndex].price;
    this.totalItems -= 1;
    this.totalCost = this.total();
    return this;
  }

  total() {
    return this.products.reduce((prev, curr) => {
      const currentDiscount = this.discounts[curr.code];
      const condition = currentDiscount && currentDiscount.condition(curr.quantity);
      if (condition) {
        this.discountsApplied.add(currentDiscount);
        return prev + this.discounts[curr.code].modifier(curr.price, curr.quantity);
      } else {
        this.discountsApplied.delete(currentDiscount);
        return prev + (curr.price * curr.quantity);
      }
    }, 0);
  }

  findProductIndex (productCode) {
    return this.products.findIndex((el) => {
      return el.code === productCode;
    });
  }

}
