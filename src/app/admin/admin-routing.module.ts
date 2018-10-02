import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './../shared/component/register/register.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'edit-vendor', component: EditvendorComponent },
      { path: 'home', component: HomeComponent },
      { path: 'register-vendor', component: RegisterComponent },
      { path: 'vendor-list', component: VendorlistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
