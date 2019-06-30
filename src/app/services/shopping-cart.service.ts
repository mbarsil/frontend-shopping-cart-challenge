import { Injectable } from '@angular/core';
import { productPrices, productNames, productCodes } from "../shared/enums/products.enum";
import { discounts } from "../shared/enums/discounts.enum";
import { Checkout } from "../shared/models/checkout.model";
import {Product} from "../shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private products: Product[] =  [
    new Product(productCodes.TSHIRT, productNames.TSHIRT, productPrices.TSHIRT, 3),
    new Product(productCodes.MUG, productNames.MUG, productPrices.MUG, 4),
    new Product(productCodes.CAP, productNames.CAP, productPrices.CAP, 4)
  ];

  private checkout: Checkout = new Checkout(this.products, discounts);


  constructor() { }

  ngOnInit() {

  }

}
