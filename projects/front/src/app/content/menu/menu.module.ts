import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { ProductComponent } from './product/product.component';
import { PointRedeemComponent } from './point-redeem/point-redeem.component';


@NgModule({
  declarations: [
    ProductComponent,
    PointRedeemComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
