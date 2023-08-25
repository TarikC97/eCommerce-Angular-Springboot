import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OktaAuth } from '@okta/okta-auth-js';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './services/product.service';
import { Routes,RouterModule, Router } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';


import myAppConfig from './config/my-app-config';
import { RegisterComponent } from './components/register/register.component';
// import {
//   OKTA_CONFIG,
//   OktaAuthModule,
//   OktaCallbackComponent
// } from '@okta/okta-angular'

// const oktaConfig = myAppConfig.oidc;
// const oktaAuth = new OktaAuth(oktaConfig);

const routes: Routes =[
  // {path: 'login/callback',component:OktaCallbackComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart-details',component: CartDetailsComponent},
  {path:'products/:id',component: ProductDetailsComponent},
  {path:'search/:keyword',component: ProductListComponent},
  //When path matches it creates new instance of prod comp.
  {path:'category/:id',component: ProductListComponent},
  {path:'category',component: ProductListComponent},
  {path:'products',component: ProductListComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'**',redirectTo:'/products',pathMatch:'full'},
  //If none of the above redirect to products,(wildcard).
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    // OktaAuthModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
