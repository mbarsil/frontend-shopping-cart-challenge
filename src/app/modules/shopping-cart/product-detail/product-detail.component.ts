import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from "../../../shared/models/product.model";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  @Output() productAddedToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    this.productAddedToCart.emit(this.product);
  }



}
