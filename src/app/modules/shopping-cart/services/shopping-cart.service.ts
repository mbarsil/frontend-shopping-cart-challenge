import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

import { productPrices, productNames, productCodes, productImgs } from "../../../shared/enums/products.enum";
import { discounts } from "../../../shared/enums/discounts.enum";
import { Checkout } from "../../../shared/models/checkout.model";
import { Product } from "../../../shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private products: Product[] =  [
    new Product(productCodes.TSHIRT, productNames.TSHIRT, productPrices.TSHIRT, productImgs.TSHIRT, 3),
    new Product(productCodes.MUG, productNames.MUG, productPrices.MUG, productImgs.MUG, 4),
    new Product(productCodes.CAP, productNames.CAP, productPrices.CAP, productImgs.CAP, 4)
  ];

  private checkout: Checkout = new Checkout(11, 120, 107,
    (new Set()).add(discounts.CAP).add(discounts.TSHIRT), this.products, discounts);

  checkoutChanged = new Subject<Checkout>();

  getProducts(){
    return this.checkout.products.slice();
  }

  getCheckout(){
    return this.checkout;
  }

  getDiscountsApplied(){
    return this.checkout.discountsApplied;
  }

  addProductUnit(productCode) {
    this.checkoutChanged.next(this.checkout.scan(productCode));
  }

  removeProductUnit(productCode) {
    this.checkoutChanged.next(this.checkout.remove(productCode));
  }

}
