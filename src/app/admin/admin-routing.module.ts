import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { LogoutComponent } from './../shared/component/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'edit-vendor', component: EditvendorComponent },
      { path: 'home', component: HomeComponent },
      { path: 'vendor', component: VendorComponent },
      { path: 'vendor-list', component: VendorlistComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
