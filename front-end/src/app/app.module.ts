import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeLoginComponent } from './customers/home-login/home-login.component';
import { HomeAdminComponent } from './enterprise/home-admin/home-admin.component';

@NgModule({
  declarations: [AppComponent, HomeLoginComponent, HomeAdminComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
