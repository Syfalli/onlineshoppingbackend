import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindCartComponent } from './Add_to_cart/find-cart/find-cart.component';
import { CartListComponent } from './Add_to_cart/cart-list/cart-list.component';
import { AdminListComponent } from './Admin/admin-list/admin-list.component';
import { FindAdminComponent } from './Admin/find-admin/find-admin.component';
import { LoginListComponent } from './Login/login-list/login-list.component';
import { FindLoginComponent } from './Login/find-login/find-login.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { FindOrderComponent } from './Order/find-order/find-order.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { FindProductComponent } from './Product/find-product/find-product.component';
import { RetailerListComponent } from './Retailer/retailer-list/retailer-list.component';
import { FindRetailerComponent } from './Retailer/find-retailer/find-retailer.component';
import { AddCartComponent } from './Add_to_cart/add-cart/add-cart.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { AddLoginComponent } from './Login/add-login/add-login.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UpdateCartComponent } from './Add_to_cart/update-cart/update-cart.component';
import { VerifyComponent } from './Login/verify/verify.component';
import { HomeComponent } from './home/home.component';
import { VerifyAdminComponent } from './Admin/verify-admin/verify-admin.component';
import { VerifyretailerComponent } from './Retailer/verifyretailer/verifyretailer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeleteRetailerComponent } from './Retailer/delete-retailer/delete-retailer.component';
import { ProductHomeComponent } from './Product/product-home/product-home.component';
import { ProductDescComponent } from './Product/product-desc/product-desc.component';

import { AddretailerComponent } from './Retailer/addretailer/addretailer.component';
import { PaymentComponent } from './Product/payment/payment.component';
import { PaySuccessComponent } from './Product/pay-success/pay-success.component';



@NgModule({
  declarations: [
    AppComponent,
    FindCartComponent,
    CartListComponent,
    AdminListComponent,
    FindAdminComponent,
    LoginListComponent,
    FindLoginComponent,
    OrderListComponent,
    FindOrderComponent,
    ProductListComponent,
    FindProductComponent,
    RetailerListComponent,
    FindRetailerComponent,
    AddCartComponent,
    AddAdminComponent,
    AddLoginComponent,
    AddProductComponent,
    UpdateCartComponent,
    VerifyComponent,
    HomeComponent,
    VerifyAdminComponent,
    VerifyretailerComponent,
    AboutusComponent,
    DeleteRetailerComponent,
    ProductHomeComponent,
    ProductDescComponent,
    AddretailerComponent,
    PaymentComponent,
    PaySuccessComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
