import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './views/customers/home-login/home-login.component';
import { HomeAdminComponent } from './views/admin/home-admin/home-admin.component';
import { HomeEnterpriseComponent } from './views/enterprise/home-enterprise/home-enterprise.component';

const routes: Routes = [
  { path: '', component: HomeLoginComponent },
  { path: 'admin', component: HomeAdminComponent },
  { path: 'enterprise', component: HomeEnterpriseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
