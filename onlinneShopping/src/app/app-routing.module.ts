import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddCartComponent } from './Add_to_cart/add-cart/add-cart.component';
import { CartListComponent } from './Add_to_cart/cart-list/cart-list.component';
import { FindCartComponent } from './Add_to_cart/find-cart/find-cart.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { AdminListComponent } from './Admin/admin-list/admin-list.component';
import { FindAdminComponent } from './Admin/find-admin/find-admin.component';
import { VerifyAdminComponent } from './Admin/verify-admin/verify-admin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { AddLoginComponent } from './Login/add-login/add-login.component';
import { FindLoginComponent } from './Login/find-login/find-login.component';
import { LoginListComponent } from './Login/login-list/login-list.component';
import { VerifyComponent } from './Login/verify/verify.component';

import { FindOrderComponent } from './Order/find-order/find-order.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { FindProductComponent } from './Product/find-product/find-product.component';
import { PaySuccessComponent } from './Product/pay-success/pay-success.component';
import { PaymentComponent } from './Product/payment/payment.component';
import { ProductDescComponent } from './Product/product-desc/product-desc.component';
import { ProductHomeComponent } from './Product/product-home/product-home.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { AddretailerComponent } from './Retailer/addretailer/addretailer.component';
import { DeleteRetailerComponent } from './Retailer/delete-retailer/delete-retailer.component';
import { FindRetailerComponent } from './Retailer/find-retailer/find-retailer.component';
import { RetailerListComponent } from './Retailer/retailer-list/retailer-list.component';
import { VerifyretailerComponent } from './Retailer/verifyretailer/verifyretailer.component';

const routes: Routes = [
  {path:'add_to_cart',component:CartListComponent},
  {path:'searchcart',component:FindCartComponent},
  {path:'addcart',component:AddCartComponent},

  {path:'admin',component:AdminListComponent},
  {path:'searchadmin',component:FindAdminComponent},
  {path:'addadmin',component:AddAdminComponent},
  {path:'verifyAdmin',component:VerifyAdminComponent},

  {path:'login',component:LoginListComponent},
  {path:'searchlogin',component:FindLoginComponent},
  {path:'adduser',component:AddLoginComponent},
  {path:'verifyuser',component:VerifyComponent},

  {path:'order',component:OrderListComponent},
  {path:'searchorder',component:FindOrderComponent},
  { path: 'carousel', component: CarouselComponent},
  {path:'product',component:ProductListComponent},
  {path:'searchproduct',component:FindProductComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'producthome',component:ProductHomeComponent},
  {path:'descproduct',component:ProductDescComponent},
  {path:'payment',component:PaymentComponent},
  {path:'success',component:PaySuccessComponent},

  {path:'retailer',component:RetailerListComponent},
  {path:'searchretailer',component:FindRetailerComponent},
  {path:'deleteretailer',component:DeleteRetailerComponent},
 
  {path:'verfiyRetailer',component:VerifyretailerComponent},
  {path:'addretailer',component:AddretailerComponent},

  {path:'home',component:HomeComponent},
 
  {path:'aboutus',component:AboutusComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
