import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './content/login/login.component';
import { PendingOrderComponent } from './content/order-management/pending-order/pending-order.component';
import { CompletedOrderComponent } from './content/order-management/completed-order/completed-order.component';
import { AccountManagementComponent } from './content/account-management/account-management.component';
import { AuthorityManagementComponent } from './content/authority-management/authority-management.component';
import { MemberManagementComponent } from './content/member-management/member-management.component';
import { ProductCategoryComponent } from './content/product-management/product-category/product-category.component';
import { ProductListComponent } from './content/product-management/product-list/product-list.component';
import { PointCategoryComponent } from './content/point-redeem-management/point-category/point-category.component';
import { PointRedeemListComponent } from './content/point-redeem-management/point-redeem-list/point-redeem-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PendingOrderComponent,
    CompletedOrderComponent,
    AccountManagementComponent,
    AuthorityManagementComponent,
    MemberManagementComponent,
    ProductCategoryComponent,
    ProductListComponent,
    PointCategoryComponent,
    PointRedeemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
