import { SharedmoduleModule } from './../shared/modules/sharedmodule/sharedmodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule,
    SharedmoduleModule
  ],
  declarations: [VendorComponent, HomeComponent, ProductlistComponent]
})
export class VendorModule { }
