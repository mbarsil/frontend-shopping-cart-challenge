import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../services/shopping-cart.service";

import { Product } from "../../../shared/models/product.model";
import { Checkout } from "../../../shared/models/checkout.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  checkout: Checkout;
  showProdModal : boolean;
  clickedProd : Product;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.checkout = this.shoppingCartService.getCheckout();
    this.products = this.shoppingCartService.getProducts();
    this.showProdModal = false;

    this.shoppingCartService.checkoutChanged.subscribe(
      (co: Checkout) => {
        this.checkout = co;
        this.products = co.products;
      });
  }

  onIncrease(prodCode) {
    this.shoppingCartService.addProductUnit(prodCode);
  }

  onDecrease(prodCode) {
    this.shoppingCartService.removeProductUnit(prodCode);
  }

  onFigureClick(event, prod) {
    this.clickedProd = prod;
    this.showProdModal = true;
  }

  onCloseModal() {
    this.showProdModal = false;
  }

  onAddToCart(product) {
    this.onIncrease(product.code);
  }

}
