import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabifySpanComponent } from './shared/components/cabify-span/cabify-span.component';
import { CabifyHeaderComponent } from './shared/components/cabify-header/cabify-header.component';
import { CabifyButtonComponent } from './shared/components/cabify-button/cabify-button.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { OrderSummaryComponent } from './shopping-cart/order-summary/order-summary.component';
import { ProductListRowComponent } from './shopping-cart/product-list/product-list-row/product-list-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CabifySpanComponent,
    CabifyHeaderComponent,
    CabifyButtonComponent,
    ShoppingCartComponent,
    ProductListComponent,
    OrderSummaryComponent,
    ProductListRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
