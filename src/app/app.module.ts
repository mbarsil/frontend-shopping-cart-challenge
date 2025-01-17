import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabifySpanComponent } from './shared/components/cabify-span/cabify-span.component';
import { CabifyHeaderComponent } from './shared/components/cabify-header/cabify-header.component';
import { CabifyButtonComponent } from './shared/components/cabify-button/cabify-button.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './modules/shopping-cart/product-list/product-list.component';
import { OrderSummaryComponent } from './modules/shopping-cart/order-summary/order-summary.component';
import { CabifyRowComponent } from './shared/components/cabify-row/cabify-row.component';
import { CabifyColComponent } from './shared/components/cabify-col/cabify-col.component';
import { CabifyGridComponent } from './shared/components/cabify-grid/cabify-grid.component';
import { CabifyModalComponent } from './shared/components/cabify-modal/cabify-modal.component';
import { ProductDetailComponent } from './modules/shopping-cart/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CabifySpanComponent,
    CabifyHeaderComponent,
    CabifyButtonComponent,
    ShoppingCartComponent,
    ProductListComponent,
    OrderSummaryComponent,
    CabifyRowComponent,
    CabifyColComponent,
    CabifyGridComponent,
    CabifyModalComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
