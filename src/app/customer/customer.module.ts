import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerComponent, HomeComponent, CartViewComponent, OrdersListComponent, ProductViewComponent, ProductsComponent, ProfileComponent, SearchComponent, SuccessComponent]
})
export class CustomerModule { }
