import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeLoginComponent } from './views/customers/home-login/home-login.component';
import { SignUpComponent } from './views/customers/sign-up/sign-up.component';
import { CustomerHomeComponent } from './views/customers/customer-home/customer-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    SignUpComponent,
    CustomerHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
