import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../services/shopping-cart.service";

import { Checkout } from "../../../shared/models/checkout.model";


@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  discountsApplied: Set<object>;
  checkout: Checkout;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.checkout = this.shoppingCartService.getCheckout();
    this.discountsApplied = this.shoppingCartService.getDiscountsApplied();

    this.shoppingCartService.checkoutChanged.subscribe(
      (co: Checkout) => {
        this.checkout = co;
        this.discountsApplied = co.discountsApplied;
      });
  }

}
