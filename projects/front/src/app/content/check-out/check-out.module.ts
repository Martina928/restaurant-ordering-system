import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CheckOutRoutingModule
  ]
})
export class CheckOutModule { }
