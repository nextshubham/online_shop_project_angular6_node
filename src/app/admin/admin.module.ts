import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedmoduleModule } from '../shared/modules/sharedmodule/sharedmodule.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, SharedmoduleModule],
  declarations: [AdminComponent, HomeComponent, VendorlistComponent, EditvendorComponent, VendorComponent]
})
export class AdminModule {}
