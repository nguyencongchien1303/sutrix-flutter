import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './views/customers/home-login/home-login.component';
import { HomeAdminComponent } from './views/admin/home-admin/home-admin.component';
import { HomeEnterpriseComponent } from './views/enterprise/home-enterprise/home-enterprise.component';
import { SignUpComponent } from './views/customers/sign-up/sign-up.component';
const routes: Routes = [
  { path: '', component: HomeLoginComponent },
  { path: 'customer', component: HomeLoginComponent },
  { path: 'customer/sign-up', component: SignUpComponent },

  { path: 'admin', component: HomeAdminComponent },
  { path: 'enterprise', component: HomeEnterpriseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
