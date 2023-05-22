import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_PATH } from '../../core/const/routing-path.const';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTING_PATH.CART,
    pathMatch: 'prefix'
  },
  {
    path: ROUTING_PATH.CART,
    component: CartComponent
  },
  {
    path: ROUTING_PATH.PAYMENT,
    component: PaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckOutRoutingModule { }
